/* jshint esversion: 6 */
import Canves from './canves';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import Table from './table';
import Matchup from './matchup';
import Sidebar from './sidebar';
import Menu from './menu';
import CollapseTransition from './collapse-transition';
import Info from './info';
import Content from './content';
import Popover from './popover';

const components = [
  Canves,
  Collapse,
  CollapseItem,
  Table,
  Matchup,
  Sidebar,
  Menu,
  CollapseTransition,
  Popover,
  Content
];

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$info = Info;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
