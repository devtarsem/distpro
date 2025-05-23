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
// import wine from '/src/wine.csv'

function Marketing(){
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
            <h1 className='landing'>Is your models lagging in accuracy, <br/>you might chossing wrong distributions.</h1>
            <p className='des'>There are huge chances that your data and model distributions are lagging, use our service to visulize the best distribution and get accurate results</p>
            <div className='flex flex-2 gap16'>
              <Link className='link linktofollow' to='/distributions'>Try now!</Link>
            </div>

          </div>
          
        </header>



        <div id='fea' className='features pad96'>
          <Mhead head={'Our features'} />

          <div className='featlist flex flex-dir gap16'>

            <div className='grid grid-1-col gap16'>
              <div className='cont'>
                <h2 className='head2 decenter'>Stunning dashboard</h2>
              </div>
              <div className='feaimg flex flex-2'>
                <img src={fea1} className='dashboard feaimg___' alt='flower'/>
              </div>
              <div className='cont'>
                <p className='desdash decenter'>We have stunning dashboard for you, in which you easily import your data in excel format once data loads it render your columns on the left side navigation, now you can plot each column data to you chossen distribution by selecting distribution on the top right corner.</p>
              </div>
            </div>


            <hr/>

            <div className='grid grid-1-col gap16'>
              <div className='cont'>
                <h2 className='head2 decenter'>Exporting dashboard</h2>
              </div>
              <div className='feaimg flex flex-2'>
                <img src={fea2} className='dashboard feaimg___' alt='flower'/>
              </div>
              <div className='cont'>
                <p className='desdash decenter'>Guess what you can add the probability distribution points to your excel sheet and get ready in your hand in just 1 click, all distributions are available here to every column in your dataset.</p>
              </div>
            </div>

            <hr/>

          </div>
        </div>


        <div id='solve' className='whatSolve pad96'>
          <Mhead head={'What we solve'} />
          <div className='solution grid grid-2-col gap96'>
            <div className='solve flex flex-dir flex-2'>
              <p className='feades'>Suppose you have a contineous database in which you want to predict the contineous output and you have to use some ML model now you have 2 options one is blindly apply the fit and get the result and turns up into a disaster, so you have to apply disribution check on features and that is what the super teadious task you have tons of tons of iterations and passing formulation PDF's on excel is mind boggling and here comes our solution we will give you the distribution of feature in just one click, and also provide feature of adding that genrated PDF's to you excel along with Png of the distributions you can compare you plots with the standard distributions and immediately figure out what distribution you have to use to really excel in your model. Like for example on right hand side you have a gaussian plot of chlorides features and it is clear that this is not all gaussian distribution so here you can use other distributions for better accuracy.</p>
              <img src={robo} className='robo' alt='robot'/>
            </div>
            <div className='markl flex flex-2'>
              <img src={gauss} className='gauss' alt='gaussian sample'/>
            </div>
          </div>
          <hr/>
        </div>


        <div id='use' className='howtouse flex flex-2 flex-dir gap16'>
          <Mhead head={'How to use'} />
          <div className='howuse pad16 grid grid-2-col gap16'>
            <div className='listitem flex flex-3 gap16'>
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
