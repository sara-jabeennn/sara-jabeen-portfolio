import type { SimpleIcon } from "simple-icons";
import {
  siReact,
  siNextdotjs,
  siTypescript,
  siNodedotjs,
  siExpress,
  siNestjs,
  siMongodb,
  siPostgresql,
  siMysql,
  siKotlin,
  siAndroid,
  siFirebase,
  siGit,
  siDocker,
  siGithubactions,
  siFigma,
} from "simple-icons";
// No AWS glyph exists in this simple-icons version - "AWS" in data/skills.ts
// has no simpleIconSlug and renders as text-only, same as any other
// non-brand skill entry.

// Keyed by the exact simpleIconSlug strings used in data/skills.ts.
export const SIMPLE_ICONS: Record<string, SimpleIcon> = {
  react: siReact,
  nextdotjs: siNextdotjs,
  typescript: siTypescript,
  nodedotjs: siNodedotjs,
  express: siExpress,
  nestjs: siNestjs,
  mongodb: siMongodb,
  postgresql: siPostgresql,
  mysql: siMysql,
  kotlin: siKotlin,
  android: siAndroid,
  firebase: siFirebase,
  git: siGit,
  docker: siDocker,
  githubactions: siGithubactions,
  figma: siFigma,
};
