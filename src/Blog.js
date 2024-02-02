import './App.css';
import Blog_area from './BLOG/Blog_area';
import B_banner from './BLOG/B_banner';
import Footer from './Footer';
import Header from './Header';

function Blog() {
  return (
    <section>
      <Header />
      <B_banner/>
      <Blog_area/>
      <Footer/>
    </section>
  );
}

export default Blog;