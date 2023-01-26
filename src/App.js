import logo from "./images/logo.svg"
import lead from "./images/lead.svg"
import background from "./images/background.svg"
import photo from "./images/photo.svg"
import bgsquare from "./images/background-square.png"
import photo2 from "./images/photo2.png"
import music from "./images/music.svg"
import art from "./images/art.svg"
import photography from "./images/photography.svg"
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="app-header">
        <div className="w-full flex justify-between my-auto">
        <img src={logo} className="float-left ml-24" alt="logo" />
        <div className="float-right mr-24 my-auto space-x-6 font-semibold text-gray-500 text-base">
          <a href="main.html" className="text-lavender hover:text-violet-800">Main</a>
          <a href="about.html">About</a>
          <a href="feedback.html">Get in touch</a>
        </div>
        </div>
        </div>
      </header>
      <hr />

      <body>
      <div className="content">
       <div className="float-left ml-24">
        <h1 className="font-bold text-[60px] mt-[162px]">Hey, I'm Nick</h1>
        <p className="text-xl text-gray-500 font-medium mt-1">Frontend Developer</p>
        <div className="h-[114px] w-[445px] mt-[92px]">
          <div id="border"></div>
          <p className="text-xl text-gray-500 font-medium leading-[30px] mt-6">Help you to create high-quality digital products
          that your clients will love and let your business thrive.</p>
        </div>
        <button className="button mt-[64px]">
          Get in touch
        <img src={lead} alt=""></img></button>
       </div> 
       <img className="float-right mt-[75px] relative -z-1" src={background} alt=""></img>
       <img className="float-right mt-[93px] absolute z-0 right-0" src={photo} alt=""></img>
       </div>

       <div className="about">
       <div className="float-left ml-24 w-[45%]">
        <h2 className="font-bold text-[32px] mt-[100px]">About me</h2>
        <img className="mt-20 rounded-full w-[412px] h-[412px] absolute -z-5" src={bgsquare} alt=""></img>
        <img className="rounded-full w-[364px] h-[364px] relative z-5 bg-gray-200 mt-6 ml-6 top-[80px]" src={photo2} alt=""></img>
        <div className="w-[353px] h-[372px] mt-[172px]">
          <h3 className="text-2xl font-semibold">Interests</h3>
          <div className="mt-11 flex w-[75%] h-[68px] flex-wrap flex-col">
          <div className="w-[3.75rem] h-[3.75rem] border-2 border-lavender rounded-full flex justify-center items-center">
            <img src={music} alt=""></img></div>
            <p className="text-xl font-semibold ml-4">Music</p>
            <p className="text-xl ml-4 mt-2 font-normal">Indie rock | Reggae</p>
          </div>
          <div className="mt-11 flex w-[100%] h-[68px] flex-wrap flex-col">
          <div className="w-[3.75rem] h-[3.75rem] border-2 border-lavender rounded-full flex justify-center items-center">
            <img src={art} alt=""></img></div>
            <p className="text-xl font-semibold ml-4">Art</p>
            <p className="text-xl ml-4 mt-2 font-normal">Edvard Munch | Frida Kahlo</p>
          </div>
          <div className="mt-11 flex w-[75%] h-[68px] flex-wrap flex-col">
          <div className="w-[3.75rem] h-[3.75rem] border-2 border-lavender rounded-full flex justify-center items-center">
            <img src={photography} alt=""></img></div>
            <p className="text-xl font-semibold -ml-10">Photography</p>
            <p className="text-xl -ml-10 mt-2 font-normal">Portraits</p>
          </div>
          </div>
          </div>
          <div className="float-right mr-24 w-[35%]">
          <div className="h-[114px] w-[445px] mt-[316px]">
          <div id="border"></div>
          <p className="text-xl text-gray-500 font-medium leading-[30px] mt-6"><b className="text-black">Nick Richardson </b> 
          - specialist in Frontend development. Clear code is my passion. Solving issues through negotiations </p>
        </div>
        <button className="button">
          Get in touch
        <img src={lead} alt=""></img></button>
        <div className="w-[540px] h-[428px] mt-[172px]">
          <h3 className="text-2xl font-semibold">Education & Experience</h3>
          <div className="mt-11 flex w-[95%] h-[100px] flex-wrap flex-col border-b-[1px] border-grey">
            <h3 className="text-xl font-normal">2008 - Present</h3>
            <div className="-mt-7">
            <p className="text-xl font-semibold ml-[168px]">Middle frontend developer</p>
            <p className="text-xl mt-2 font-normal ml-[168px]">Ozon</p>
            </div>
          </div>
          <div className="mt-6 flex w-[95%] h-[100px] flex-wrap flex-col border-b-[1px] border-grey">
            <h3 className="text-xl font-normal">2006 - 2007</h3>
            <div className="-mt-7">
            <p className="text-xl font-semibold ml-[168px]">Frontend development courses</p>
            <p className="text-xl mt-2 font-normal ml-[168px]">Stepik</p>
            </div>
          </div>
          <div className="mt-6 flex w-[95%] h-[100px] flex-wrap flex-col border-b-[1px] border-grey">
            <h3 className="text-xl font-normal">2000 - 2005</h3>
            <div className="-mt-7">
            <p className="text-xl font-semibold ml-[168px]">Frontend developer</p>
            <p className="text-xl mt-2 font-normal ml-[168px]">Saint Petersburg State University</p>
            </div>
          </div>
          </div>
       </div> 
       </div>

       <div className="form">
        <div className="w-[764px] h-[567px] bg-white mx-auto relative top-[70px] rounded-2xl">
          <div className="w-[668px] h-[471px] bg-white mx-auto relative top-[48px]">
            <form className="w-full h-[471px]" action="">
            <fieldset className="flex flex-wrap flex-row">
            <legend className="font-bold text-[32px]">Let's discuss your project</legend>
            <h5 className="text-base font-bold mt-12 w-[100%]">Your full name <sup className="text-red-600">*</sup></h5>
            <input className="mt-2 w-[324px] h-[55px] border-[1px] bg-white rounded-2xl border-grey relative hover:border-lavender focus:shadow-xl shadow-lavender"
             type="text" name="fullname" placeholder=" Name Surname" required></input>
             <h5 className="text-base font-bold mt-12 w-[100%] relative -top-[135px] ml-[345px]">Your email <sup className="text-red-600">*</sup></h5>
            <input className="mt-2 w-[324px] h-[55px] border-[1px] bg-white rounded-2xl border-grey absolute top-[120px] right-0 hover:border-lavender focus:shadow-xl shadow-lavender"
             type="text" name="email" placeholder=" name@example.com" required></input>
             <h5 className="text-base font-bold -mt-9 w-[100%]">Tell me about your project</h5>
            <input className="mt-2 w-[667px] h-[112px] border-[1px] bg-white rounded-2xl border-grey hover:border-lavender focus:shadow-xl shadow-lavender"
             type="text" name="description" placeholder=" Add here a general description of your idea and target aim"></input>
             <button className="button mt-12 w-[147px]" type="submit">Submit<img src={lead} alt=""></img></button>
            </fieldset>
            </form>
          </div>
        </div>
       </div>
       <hr />
      </body>

      <div className="footer">
        <p className="ml-24 pt-8 text-base text-gray-500">&copy; 2022 JetRuby. All Rigths Reserved</p>
      </div>
    </div>
  );
}

export default App;
