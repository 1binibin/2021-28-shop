var core = {};
var plugins = ['contextmenu', 'dnd', 'state', 'wholerow', 'changed'];

core.themes = {
  variant: true,
  striped: true,
};

core.data = {
  url: function (node) {
    return '/api/tree';
  },
  data: function (node) {
    return { id: node.id };
  },
};

function onChangedTree(e, data) {
  console.log(data.changed.selected); // newly selected
  console.log(data.changed.deselected); // newly deselected
}

$('#jstreeWrap').on('changed.jstree', onChangedTree).jstree({ core: core, plugins: plugins });
