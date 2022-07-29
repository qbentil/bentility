function CustomEditor() {
  return(
    <textarea
      name="body"
      id="body"
      className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg outline-none"
      cols={30}
      rows={9}
    ></textarea>
  );
}

export default CustomEditor;
