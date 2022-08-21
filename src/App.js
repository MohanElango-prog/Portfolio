import profile from './profile-pic.png';
import './App.css';
import TypeWriterEffect from 'react-typewriter-effect';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <h1>Hi, I'm Mohan Elango 👋</h1>
       <p>
          I'm a 
          <TypeWriterEffect
        textStyle={{
          // fontFamily: 'Red Hat Display',
          color: '#white',
          // fontWeight: 10,
          fontSize: '20px',
        }}
        startDelay={1000}
        cursorColor="#3F3D56"
        multiText={[
          'Ui/Ux Designer 💻',
          'Full Stack Developer ⚡',
        ]}
        nextTextDelay={1000}
        typeSpeed={40}
        loop={true}
      />

       </p>
      </header>
    </div>
  );
}

export default App;
