import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import About from './components/pages/About';
import PostAdd from './components/pages/PostAdd';
import PostEdit from './components/pages/PostEdit';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import BlogDetails from './components/features/BlogDetails';

const App = () => {
  const info = "There's nothing here!";
  return (
    <Container>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/adding" element={<PostAdd />} />
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={
              <p>{ info }</p>
            }
          />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
