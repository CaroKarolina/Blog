import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import About from './components/pages/About';
import PostAdd from './components/pages/PostAdd';
import PostEdit from './components/pages/PostEdit';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import Post from './components/features/Post';

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/postAdd" element={<PostAdd />} />
          <Route path="/postEdit" element={<PostEdit />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
            }
          />
          <Route path="/post/:postId" element={<Post />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;
