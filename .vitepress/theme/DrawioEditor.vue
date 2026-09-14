<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const editor = ref(null)
const iframe = ref(null)
const status = ref('Prêt')
const lastXml = ref('')
const lastSavedAt = ref('')
const isFullscreen = ref(false)

const embedOrigin = 'https://embed.diagrams.net'
const storageKey = '14b-poo-drawio-diagram'
const emptyDiagram = '<mxfile host="app.diagrams.net"><diagram name="Page-1"></diagram></mxfile>'
const libraryUrl = 'https://gitlab.com/420-14b-fx/contenu/-/raw/main/en_vrac/Bloc-notes.xml?ref_type=heads&inline=false'
const editorUrl = `https://embed.diagrams.net/?embed=1&ui=atlas&spin=1&proto=json&libraries=1&configure=1&clibs=U${encodeURIComponent(libraryUrl)}`

function sendToEditor(message) {
  iframe.value?.contentWindow?.postMessage(JSON.stringify(message), embedOrigin)
}

function parseMessage(event) {
  if (event.origin !== embedOrigin || event.source !== iframe.value?.contentWindow) {
    return null
  }

  if (typeof event.data === 'object') {
    return event.data
  }

  try {
    return JSON.parse(event.data)
  } catch {
    return null
  }
}

function saveDiagram(xml) {
  if (!xml) {
    return
  }

  lastXml.value = xml
  localStorage.setItem(storageKey, xml)
  lastSavedAt.value = new Date().toLocaleTimeString()
  status.value = `Enregistré à ${lastSavedAt.value}`
  sendToEditor({ action: 'status', message: 'Diagramme enregistré' })
}

function handleMessage(event) {
  const message = parseMessage(event)

  if (!message) {
    return
  }

  if (message.event === 'init') {
    sendToEditor({
      action: 'load',
      autosave: 1,
      xml: localStorage.getItem(storageKey) || emptyDiagram
    })
    status.value = localStorage.getItem(storageKey) ? 'Diagramme restauré' : 'Prêt'
  } else if (message.event === 'configure') {
    sendToEditor({
      action: 'configure',
      config: {
        hideMenus: ['file'],
        hideMenuItems: ['open', 'import'],
        keyboardShortcuts: [
          { keyCode: 'O', control: true, action: null }
        ]
      }
    })
  } else if (message.event === 'save') {
    saveDiagram(message.xml)
  } else if (message.event === 'exit') {
    status.value = 'Éditeur fermé'
  }
}

function requestSave() {
  sendToEditor({ action: 'save' })
  status.value = 'Enregistrement en cours...'
}

async function downloadDiagram() {
  if (!lastXml.value) {
    status.value = 'Aucun diagramme à télécharger'
    return
  }

  const blob = new Blob([lastXml.value], { type: 'application/xml' })

  if (typeof window.showSaveFilePicker === 'function') {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: 'diagramme.drawio',
        types: [
          {
            description: 'Diagramme draw.io',
            accept: {
              'application/xml': ['.drawio', '.xml']
            }
          }
        ]
      })
      const writable = await handle.createWritable()
      await writable.write(blob)
      await writable.close()
      status.value = 'Fichier téléchargé'
    } catch (error) {
      if (error?.name !== 'AbortError') {
        status.value = 'Impossible d’enregistrer le fichier'
      }
    }
    return
  }

  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'diagramme.drawio'
  link.click()
  URL.revokeObjectURL(url)
  status.value = 'Fichier téléchargé'
}

function newDiagram() {
  if (lastXml.value && !window.confirm('Créer un nouveau diagramme et remplacer celui enregistré ?')) {
    return
  }

  lastXml.value = emptyDiagram
  localStorage.removeItem(storageKey)
  sendToEditor({ action: 'load', xml: emptyDiagram })
  status.value = 'Nouveau diagramme'
}

function handleFullscreenChange() {
  isFullscreen.value = document.fullscreenElement === editor.value
  status.value = isFullscreen.value
    ? 'Mode plein écran activé'
    : 'Mode plein écran désactivé'
}

async function toggleFullscreen() {
  if (!editor.value) {
    status.value = 'Plein écran indisponible'
    return
  }

  if (document.fullscreenElement === editor.value) {
    if (typeof document.exitFullscreen !== 'function') {
      status.value = 'Plein écran indisponible dans ce navigateur'
      return
    }

    try {
      await document.exitFullscreen()
    } catch {
      status.value = 'Impossible de quitter le plein écran'
    }
    return
  }

  if (typeof editor.value.requestFullscreen !== 'function') {
    status.value = 'Plein écran indisponible dans ce navigateur'
    return
  }

  try {
    await editor.value.requestFullscreen()
  } catch {
    status.value = 'Plein écran refusé par le navigateur'
  }
}

onMounted(async () => {
  window.addEventListener('message', handleMessage)
  document.addEventListener('fullscreenchange', handleFullscreenChange)
  await nextTick()
  iframe.value?.focus()
})

onBeforeUnmount(() => {
  window.removeEventListener('message', handleMessage)
  document.removeEventListener('fullscreenchange', handleFullscreenChange)
})
</script>

<template>
  <section ref="editor" class="drawio-editor" aria-label="Éditeur de diagrammes draw.io">
    <div class="drawio-toolbar">
      <div class="drawio-actions">
        <button type="button" @click="newDiagram">Nouveau</button>
        <!-- <button type="button" class="primary" @click="requestSave">Enregistrer</button> -->
        <button type="button" @click="downloadDiagram">Télécharger (.drawio)</button>
        <button
          type="button"
          :aria-label="isFullscreen ? 'Quitter le plein écran' : 'Passer en plein écran'"
          :aria-pressed="isFullscreen"
          @click="toggleFullscreen"
        >
          {{ isFullscreen ? 'Quitter le plein écran' : 'Plein écran' }}
        </button>
      </div>
      <span class="drawio-status" role="status" aria-live="polite">{{ status }}</span>
    </div>

    <iframe
      ref="iframe"
      title="Éditeur de diagrammes draw.io"
      :src="editorUrl"
      allow="fullscreen"
    />
  </section>
</template>

<style scoped>
.drawio-editor {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 170px);
  min-height: 600px;
  width: 100%;
  margin: 0 -24px -32px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.drawio-editor:fullscreen {
  width: 100%;
  height: 100%;
  min-height: 0;
  margin: 0;
  border: 0;
  border-radius: 0;
}

.drawio-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 14px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.drawio-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

button {
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  cursor: pointer;
}

button:hover {
  border-color: var(--vp-c-brand-1);
}

button.primary {
  color: var(--vp-c-white);
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.drawio-status {
  color: var(--vp-c-text-2);
  font-size: 13px;
  white-space: nowrap;
}

iframe {
  flex: 1;
  width: 100%;
  height: 100%;
  min-height: 0;
  border: 0;
}

@media (max-width: 640px) {
  .drawio-editor {
    height: calc(100vh - 220px);
    min-height: 500px;
    margin-right: -16px;
    margin-left: -16px;
  }

  .drawio-toolbar {
    align-items: stretch;
    flex-direction: column;
  }

  .drawio-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .drawio-status {
    white-space: normal;
  }
}
</style>
