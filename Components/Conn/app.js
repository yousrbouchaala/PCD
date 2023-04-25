
function App() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
          <Route exact path="/" component={SignIn} />
          </Routes>
          <Routes>
          <Route path="/confirmation" component={Confirmation} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }