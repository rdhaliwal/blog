import BlogEntry from '../../components/BlogEntry';

export const meta = {
  title: 'CSS Tricks'
};

export default ({ children }) => (
  <BlogEntry {...meta}> {children} </BlogEntry>
);

# CSS Grids

CSS Grids are cool.

```css
.Grid {
  grid-template-rows: 10px;
  grid-template-columns: 10px;
}
```
