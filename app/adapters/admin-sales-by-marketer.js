import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL(modelName, id, snapshot, requestType, query) {
    let url = this._super(modelName, id, snapshot, requestType, query);
    url = url.replace('admin-sales-by-marketers', 'admin/sales/by-marketer');
    return url;
  }
});
