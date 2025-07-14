export default {
  getButtonVariant: (pageName) => {
    return appsmith.pageName === pageName ? "Secondary" : "Tertiary";
  }
}