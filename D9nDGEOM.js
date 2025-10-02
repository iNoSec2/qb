const s = {
  data() {
    return { isSuperAdmin: false };
  },
  created() {
    if (JSON.parse(sessionStorage.getItem('roles')).includes('super-admin')) {
      this.isSuperAdmin = true;
    }
  },
};
export { s as g };
