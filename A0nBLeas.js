import '../assets/app-BjImoLrr.js';
const i = {
  methods: {
    fileIsViewable(e) {
      return !!(
        e.extension === 'DAWE' ||
        e.extension === 'PANO' ||
        e.extension === 'PDF' ||
        e.extension === 'DOC' ||
        e.extension === 'DOCX' ||
        e.extension === 'DOCM' ||
        e.extension === 'PPT' ||
        e.extension === 'PPTX' ||
        e.extension === 'TIF' ||
        e.extension === 'TIFF' ||
        e.extension === 'DOCMOD' ||
        e.extension === 'GLB' ||
        e.extension === 'GLTF' ||
        (e.extension === 'XML' && this.can('show', 'xml')) ||
        e.aggregate_type === 'image' ||
        e.aggregate_type === 'video' ||
        e.aggregate_type === 'html' ||
        e.extension === 'XLS' ||
        e.extension === 'XLSX' ||
        e.extension === 'XLSM'
      );
    },
    fileGoToViewer(e, n = false, t = null, o = null) {
      this.centralPanelsStore.addingCentralPanels({
        centralPanelType: 'fileViewer',
        centralPanelData: {
          fileId: e.id,
          comeFromUuid: t,
          getOnlyFile: (e.extension === 'GLB' || e.extension === 'GLTF') && !n,
          page: e.page,
          indexlink: e.indexlink,
          tag: o,
        },
      });
    },
    fileGoToPoiViewer(e, n, t = null) {
      if (n && e) {
        this.centralPanelsStore.changingPoiObject({
          poiId: n.id,
          forceEdition: n.forceEdition,
          objectPoiId: n.object_id,
          objectPoiType: n.object_type,
        });
        this.$nextTick(() => {
          this.centralPanelsStore.addingCentralPanels({
            centralPanelType: 'fileViewer',
            centralPanelData: {
              fileId: e.id,
              comeFromUuid: t,
              getOnlyFile: false,
            },
          });
        });
      }
    },
  },
};
export { i as v };
