// General types declaration so VSCode allows TS imports from .vue files
declare module "*.vue" {
  import Vue from 'vue'
  export default typeof Vue
}