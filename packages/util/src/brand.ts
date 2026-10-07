// Single source of truth for the product name of this fork. Change values here to rebrand.
export const Brand = {
  name: "zombie_agent",
  binCommand: "zombie_agent",
  configDirName: "zombie_agent",
  envPrefix: "ZOMBIE_AGENT",
  description: "Custom AI agent CLI",
} as const

// Config file names in ascending precedence (later files override earlier ones).
// Legacy opencode names stay supported for compatibility.
export const configFileNames = ["opencode.json", "opencode.jsonc", `${Brand.name}.json`, `${Brand.name}.jsonc`] as const
