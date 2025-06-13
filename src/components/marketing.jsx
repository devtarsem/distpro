import './../utils/util.css'
import './../styles/marketing.css'
import { Link } from 'react-router';
import land from './../icons/land.jpg'
import flower from './../icons/flower.png'
import fea1 from './../icons/fea1.png'
import fea2 from './../icons/fea2.png'
import Mhead from './marketingHead';
import gauss from './../icons/gauss.png'
import check from './../icons/check.png'
import robo from './../icons/robo.svg'
import Problem from './problem_statement';
import phone from './../icons/phone1.png'
import { useState , useEffect,useRef} from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
// import wine from '/src/wine.csv'

const stunning = {
  count : 1,
  heading : "Stunning Dashboard",
  points : [
    "Stunning dashboard that gives the feel of optimum management and very easy to use UI-UX.",
    "Free to use fully optimized user dashboard that actually improves your machine learning models.",
    "System that driven with real time calculations and real time PDF points generation",
  ]
}

const exporting = {
  count : 1,
  heading : "Exporting data",
  points : [
    "Full data export exposureis provided on the dashboard",
    "Distribution charts exports are available on the dashboard",
    "Real time PDF points are also available to export for all kind of available distributions"
  ]
}

function Marketing(){

    const [count,setCount] = useState(1);

    useEffect(() => {
    AOS.init({
        duration: 800,      
        easing: 'ease-out', 
        once: true,         
        offset: 100        
      });
    }, [])

    function forward(){
      if(count!=2){
        setCount(count=> count+1)
      }else{
        setCount(count=> 1)

      }
    }
    function backward(){
      if(count!=1){
        setCount(count=> count-1)
      }else{
        setCount(count=> 1)

      }
    }
    

    return(
      <main className='marketing' >
        <nav className='nav flex flex-1 pad16'>
          <h1 className='head'>DistriPro</h1>
          <div className='features fealinkstop flex flex-1 gap32'>
            <a href='#fea' className='link link__'>Our features</a>
            <a href='#solve' className='link link__'>What we solve</a>
            <a href='#use' className='link link__'>How to use</a>
            <Link to='/distributions' className='link link__'>Try now!</Link>
            <a href='https://firebasestorage.googleapis.com/v0/b/imageprocess-bb374.firebasestorage.app/o/images%2FWineQT.csv?alt=media&token=a1defef3-2670-4c69-bd56-e7c391219a15' className='down btn'>Download sample dataset</a>
           
          </div>
        </nav>
        <header className='headers  gap96'>
          <div className='content flex flex-2 flex-dir gap16'>
            <h1 data-aos="fade-up" className='landing'>Is your models lagging in accuracy, <br/>you might chossing wrong distributions.</h1>
            <p data-aos="fade-up" className='des'>There are huge chances that your data and model distributions are lagging, use our service to visulize the best distribution and get accurate results</p>
            <div data-aos="flip-left" className='flex flex-2 gap16'>
              <Link className='link linktofollow' to='/distributions'>Try now!</Link>
            </div>

          </div>
          
        </header>



        <div  id='fea' className='features pad96'>
          <Mhead head={'Our features'} />

          <div className='featlist grid grid-2-col '>
            <div data-aos="flip-left" className='disply1 flex flex-1'>
              <div className='card'>
                <button onClick={forward} className='nextbtn'>
                  &rarr;
                </button>
                <button onClick={backward} className='prevbtn'>
                  &larr;
                </button>
                <div className={(count==1 || count==2) ? "innercard innerAnimate" : "innercard"}>
                  <div className='designcut1'></div>
                  <div className='designcut2'></div>
                  <div className='iconhead flex flex-2 flex-dir gap16 pad16'>
                    <svg className='iconFea' viewBox="0 0 48 48" enable-background="new 0 0 48 48" id="Layer_3" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon fill="#fff" points="30.367,21.922 16.96,8.113 21.334,22.747 17.885,26.021 31.04,39.887 26.867,25.322 "></polygon> <path d="M24,0C10.745,0,0,10.745,0,24s10.745,24,24,24s24-10.745,24-24S37.255,0,24,0z M24,44 c-4.756,0-9.119-1.667-12.552-4.439l7.053-7.053l-2.754-2.902l-7.149,7.149C5.727,33.293,4,28.849,4,24C4,12.954,12.954,4,24,4 c4.849,0,9.293,1.727,12.755,4.597l-6.966,6.966l2.781,2.875l6.99-6.99C42.333,14.881,44,19.244,44,24C44,35.046,35.046,44,24,44z" fill="#fff"></path> </g> </g></svg>
                    {count == 1 &&
                      <h2 className='head2 feahead'>{stunning.heading}</h2>
                    }
                    {count == 2 &&
                      <h2 className='head2 feahead'>{exporting.heading}</h2>
                    }
                  </div>
                  <div className='fealist_ '>
                    <ol className='list flex pad16 flex-dir flex-2 gap16'>
                      {count == 1 &&
                        <>
                          {stunning.points.map((el,index)=>
                            <li className='fealist'>{index+1}. {el}</li>
                            
                          )}
                        </>
                      }
                      {count == 2 &&
                        <>
                          {exporting.points.map((el,index)=>
                            <li className='fealist'>{index+1}. {el}</li>
                            
                          )}
                        </>
                      }
                    </ol>
                  </div>
                </div>

              </div>
            </div>

            <div data-aos="flip-right" className='display2 pad16 flex flex-2'>
              <div className='displaycircle'></div>
              <img src={phone} className='phone' alt='phone'/>
            </div>

            {/* <div className='featurepro grid grid-1-col gap16'>
              <div className='grid grid-2-col gap48'>
                <div className='feaimg flex flex-2'>
                  <img src={fea1} className='dashboard feaimg___' alt='flower'/>
                </div>
                <div className='cont flex flex-2 flex-dir gap16'>
                  <h2 className='head2 decenter'>Stunning dashboard</h2>
                  <p className='desdash decenter'>We have stunning dashboard for you, in which you easily import your data in excel format once data loads it render your columns on the left side navigation, now you can plot each column data to you chossen distribution by selecting distribution on the top right corner.</p>
                </div>
              </div>
            </div> */}

            {/* <div className='grid grid-1-col gap16'>
              
              <div className='grid grid-2-col gap48'>
                <div className='feaimg flex flex-2'>
                  <img src={fea2} className='dashboard feaimg___' alt='flower'/>
                </div>
                <div className='cont flex flex-2 flex-dir gap16'>
                  <h2 className='head2 decenter'>Exporting dashboard</h2>
                  <p className='desdash decenter'>Guess what you can add the probability distribution points to your excel sheet and get ready in your hand in just 1 click, all distributions are available here to every column in your dataset.</p>
                </div>
              </div>
            </div> */}


          </div>
        </div>


        <div data-aos="zoom-in" id='solve' className='whatSolve pad96 flex flex-dir gap96'>
          <Mhead head={'What we solve'} />
          {/* <div className='solution grid grid-1-col gap96'>
            <div className='solve flex flex-dir flex-2'>
            </div>
          </div> */}
          <Problem/>
        </div>


        <div id='use' className='howtouse flex flex-2 flex-dir gap16'>
          <Mhead head={'How to use'} />
          <div data-aos="zoom-out" className='howuse pad16 grid grid-2-col gap16'>
            <div className='listitem lesto flex flex-3 gap16'>
              <img src={check} className='check' alt='check'/>
              <p className='checklists'>First upload the data in excel format.</p>
            </div>

            <div className='listitem flex flex-3 gap16'>
              <img src={check} className='check' alt='check'/>
              <p className='checklists'>Now select distribution type from right top corner.</p>
            </div>

            <div className='listitem flex flex-3 gap16'>
              <img src={check} className='check' alt='check'/>
              <p className='checklists'>Now select the column that you want to plot.</p>
            </div>

            <div className='listitem flex flex-3 gap16'>
              <img src={check} className='check' alt='check'/>
              <p className='checklists'>Download he plots from plot download button at bottom.</p>
            </div>

            <div className='listitem flex flex-3 gap16'>
              <img src={check} className='check' alt='check'/>
              <p className='checklists'>To add PDF's in excel clcik on bottom right corner add PDF's to excel button.</p>
            </div>

            <div className='listitem flex flex-3 gap16'>
              <img src={check} className='check' alt='check'/>
              <p className='checklists'>On exports page now select distribution and select column to perform PDF's.</p>
            </div>

            <div className='listitem flex flex-3 gap16'>
              <img src={check} className='check' alt='check'/>
              <p className='checklists'>Click on exports button to export your updated excel file.</p>
            </div>

            <div className='listitem flex flex-3 gap16'>
              <img src={check} className='check' alt='check'/>
              <p className='checklists'>And yes it's done.</p>
            </div>
          </div>
          <hr/>
        </div>


        <footer className='footer pad96 flex flex-dir gap16'>
          <h2 className='head2 head2_white'>DistriPro</h2>
          <div className='footlinks flex flex-2 gap48'>
            <a href='#fea' className='link link__ link__white'>Our features</a>
            <a href='#solve' className='link link__ link__white'>What we solve</a>
            <a href='#use' className='link link__ link__white'>How to use</a>
            
          </div>
        </footer>

      </main>
    )
  }

  export default Marketing;
