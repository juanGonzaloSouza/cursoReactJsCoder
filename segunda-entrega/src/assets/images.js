const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context('./images', false, /\.(webp)$/));
export default images;