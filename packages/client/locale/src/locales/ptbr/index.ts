/**
 * Portuguese (Brazil) language pack contributed by this package. Each feature
 * namespace the desktop GUI ships gets its own dictionary here, hardcoded in
 * this package (a language pack owns its copy and never value-imports across
 * feature packages). Keys mirror each feature's shipped `en` dictionary so a
 * lookup that misses pt-BR falls back per-key to English without touching the
 * shared common namespace.
 */
import { approval } from './approval.ts'
import { chat } from './chat.ts'
import { command } from './commands.ts'
import { conversation } from './conversation.ts'
import { deliverables } from './deliverables.ts'
import { directoryBrowser } from './directory-browser.ts'
import { documentHtml } from './document-html.ts'
import { documentMarkdown } from './document-markdown.ts'
import { feedback } from './feedback.ts'
import { goal } from './goal.ts'
import { job } from './jobs.ts'
import { model } from './model.ts'
import { openInApp } from './open-in-app.ts'
import { permission } from './permission.ts'
import { permissionAccess } from './permission-access.ts'
import { plan } from './plan.ts'
import { pluginManager } from './plugin-manager.ts'
import { question } from './questions.ts'
import { reference } from './reference.ts'
import { schedule } from './schedule.ts'
import { scheduleManager } from './schedule-manager.ts'
import { settings } from './settings.ts'
import { settingsAccount } from './settings-account.ts'
import { settingsAgentLoop } from './settings-agent-loop.ts'
import { settingsAgentPreset } from './settings-agent-preset.ts'
import { settingsModels } from './settings-models.ts'
import { settingsPluginInventory } from './settings-plugin-inventory.ts'
import { settingsPlugins } from './settings-plugins.ts'
import { settingsSessionLog } from './settings-session-log.ts'
import { settingsShell } from './settings-shell.ts'
import { settingsSubagent } from './settings-subagent.ts'
import { settingsTheme } from './settings-theme.ts'
import { settingsWebSearch } from './settings-web-search.ts'
import { shortcuts } from './shortcuts.ts'
import { shortcutsLayout } from './shortcuts-layout.ts'
import { sidebar } from './sidebar.ts'
import { sidebarBrowser } from './sidebar-browser.ts'
import { sidebarCodePreview } from './sidebar-code-preview.ts'
import { sidebarDocumentPreview } from './sidebar-document-preview.ts'
import { sidebarExcel } from './sidebar-excel.ts'
import { sidebarFiles } from './sidebar-files.ts'
import { sidebarImage } from './sidebar-image.ts'
import { sidebarOffice } from './sidebar-office.ts'
import { sidebarPdf } from './sidebar-pdf.ts'
import { sidebarRight } from './sidebar-right.ts'
import { sidebarTerminal } from './sidebar-terminal.ts'
import { skill } from './skill.ts'
import { slashMenu } from './slash-menu.ts'
import { subagent } from './subagent.ts'
import { trajectory } from './trajectory.ts'
import { workflowRun } from './workflow-run.ts'
import { workspace } from './workspace.ts'

/** Feature-namespace Portuguese dictionaries, keyed by registered namespace. */
export const PT_BR_NAMESPACES: Record<string, Record<string, string>> = {
  approval,
  chat,
  command,
  conversation,
  deliverables,
  'directory-browser': directoryBrowser,
  'documentHtml': documentHtml,
  'documentMarkdown': documentMarkdown,
  feedback,
  goal,
  job,
  model,
  'open-in-app': openInApp,
  'permission.access': permissionAccess,
  'settings.permission': permission,
  plan,
  pluginManager,
  question,
  reference,
  'schedule.catalog': schedule,
  'schedule.manager': scheduleManager,
  settings,
  'settings.account': settingsAccount,
  'settings.agentLoop': settingsAgentLoop,
  'settings.agentPreset': settingsAgentPreset,
  'settings.models': settingsModels,
  'settings.pluginInventory': settingsPluginInventory,
  'settings.plugins': settingsPlugins,
  'settings.sessionLog': settingsSessionLog,
  'settings.shell': settingsShell,
  'settings.subagent': settingsSubagent,
  'settings.theme': settingsTheme,
  'settings.webSearch': settingsWebSearch,
  shortcuts,
  'shortcuts.layout': shortcutsLayout,
  sidebar,
  sidebarBrowser,
  sidebarCodePreview,
  sidebarDocumentPreview,
  sidebarExcel,
  sidebarFiles,
  sidebarImage,
  sidebarOffice,
  sidebarPdf,
  sidebarRight,
  sidebarTerminal,
  skill,
  'slash.menu': slashMenu,
  subagent,
  trajectory,
  workflowRun,
  workspace,
}
