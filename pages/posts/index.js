function importAll(req) {
  return req.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\.md$/, ""),
    module: req(fileName)
  }));
}

const files = importAll(
  require.context("./", true, /\.md$/)
);


const Posts = () => {
  return (
    <ul>
      {files.map((file) => (
        <li>
          <a href={`/posts${file.link}`}>{file.module.meta.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Posts;