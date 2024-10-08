const asset_base_path = process.env.REACT_APP_ASSET_BASE_PATH;
const environment = process.env.REACT_APP_ENVIRONMENT;
const folder_path = process.env.REACT_APP_ASSET_FOLDER_NAME;

const base_path = asset_base_path + "/" + environment + "/" + folder_path + "/"
const image_config = "?auto=compress&"

export const IMAGE_SRC = {
  LOGO: `${base_path}assets/images/logo/logo.png${image_config}`,
};
