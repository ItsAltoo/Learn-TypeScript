// npm install web-vitals
import { ReportHandler } from 'web-vitals';
// web-vitals tidak ditemkan di node_modules, jadi kita harus menginstallnya terlebih dahulu
// npm install web-vitals
// mengapa reporthandler tidak ditemukan di web-vitals? karena reporthandler adalah tipe data yang didefinisikan oleh web-vitals

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
