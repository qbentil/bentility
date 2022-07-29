function CustomEditor({val, setVal}:{val:string, setVal:any}) {
  return(
    <textarea
      name="body"
      id="body"
      className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg outline-none"
      cols={30}
      rows={9}
      value={val}
      onChange={(e) => setVal(e.target.value)}
    ></textarea>
  );
}

export default CustomEditor;
