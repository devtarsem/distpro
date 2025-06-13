import './../utils/util.css'
import './../styles/marketing.css'
import { useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Problem(){

    const [act, setAct] = useState(1);

    function Sol(){
        setAct(2)
    }
    function prob(){
        setAct(1)
    }
    function feature(){
        setAct(3)
    }
    function fut(){
        setAct(4)
    }

    const problem = {
            act : 1,
            list : [
                "Machine learning on continuous databases often fails when done blindly, especially for regression or continuous output prediction.",
                "Skipping distribution analysis leads to poor model choice and drastically reduced accuracy.",
                "Manually checking distributions of multiple features is extremely tedious and time-consuming.",
                "Generating plots, matching them with theoretical distributions, and then exporting them to Excel/PDF is a mind-boggling, repetitive task.",
                "Without clear visualization, it becomes hard to decide whether to use transformations, distribution-specific models (like Gamma, Exponential), or normalization techniques."
            ]
        }
    
    const solution = {
            act : 2,
            list : [
                "Get detailed distribution plots for all your features in a single click — fast, efficient, and automated.",
                "For each feature, the system generates a high-quality PNG plot comparing it with standard statistical distributions (Gaussian, Exponential, etc.).",
                "For each feature, the system generates a PDF report summarizing the match level and best-fit distribution.",
                "These outputs are automatically embedded into your Excel, removing the need for manual compilation.",
                "Example: Suppose the chlorides feature shows a skewed distribution — our tool instantly reveals it's not Gaussian, suggesting alternate models like log-normal or gamma, thus preventing model degradation.",
                "This empowers data scientists to make data-driven preprocessing decisions, improving model performance and training efficiency."

            ]
        }

    const usecase = {
            act : 3,
            list : [
                "Accurate Model Selection knowing the actual distribution helps you choose the right model (e.g., linear regression vs. generalized linear models) based on statistical assumptions.",
                "Improved Prediction Accuracy when you use the correct transformations or modeling techniques as per distribution, your model generalizes better, reducing error metrics like RMSE or MAE.",
                "Better Feature Engineering understanding skewness or kurtosis allows targeted transformations (log, square root, Box-Cox), enhancing feature relevance and reducing noise.",
                "Faster Experimentation Cycle one-click visualization and Excel embedding eliminate manual overhead, allowing data scientists to test more hypotheses quickly and iterate faster on feature pipelines."
            ]
        }
    
    const future = {
        act : 4,
        list : [
            "Users won't just visualize distributions — they'll be able to train machine learning and neural network models in real time on their own datasets, all within a browser-based interface.",
            "The lab will offer an interactive panel to train and compare two models side-by-side (e.g., Linear Regression vs. Neural Net), showcasing metrics like accuracy, loss curves, and confusion matrices live.",
            "From preprocessing (distribution check, transformation) to model deployment (via APIs), the lab will serve as a complete ML sandbox — ideal for researchers, students, and professionals to experiment without code dependencies."
        ]
    }
    
    return (
        <div className='problem'>
            <div className='cor grid grid-6-col'>
                <div className='btns flex flex-dir '>
                    <button onClick={prob} className={act == 1 ? "slidebn slidebn_act" : "slidebn"}>Problem statement</button>
                    <button onClick={Sol} className={act == 2 ? "slidebn slidebn_act" : "slidebn"}>Our solution</button>
                    <button onClick={feature} className={act == 3 ? "slidebn slidebn_act" : "slidebn"}>Use case in Machine learning</button>
                    <button onClick={fut} className={act == 4 ? "slidebn slidebn_act" : "slidebn"}>Future planning</button>
                </div>
                <div className='explain flex flex- pad16'>
                    {/* <p className='feades'>Suppose you have a contineous database in which you want to predict the contineous output and you have to use some ML model now you have 2 options one is blindly apply the fit and get the result and turns up into a disaster, so you have to apply disribution check on features and that is what the super teadious task you have tons of tons of iterations and passing formulation PDF's on excel is mind boggling and here comes our solution we will give you the distribution of feature in just one click, and also provide feature of adding that genrated PDF's to you excel along with Png of the distributions you can compare you plots with the standard distributions and immediately figure out what distribution you have to use to really excel in your model. Like for example on right hand side you have a gaussian plot of chlorides features and it is clear that this is not all gaussian distribution so here you can use other distributions for better accuracy.</p> */}
                    <ul className='list flex flex-2'>
                        {act== 1 &&
                            <div className=''>
                                {problem.list.map((el,index)=>
                                    <li className='listitem' >{index+1}. {el}</li>
                                )}

                            </div>
                        }
                        {act== 2 &&
                            <div className=''>
                                {solution.list.map((el,index)=>
                                    <li className='listitem' >{index+1}. {el}</li>
                                )}

                            </div>
                        }
                        {act== 3 &&
                            <div className=''>
                                {usecase.list.map((el,index)=>
                                    <li className='listitem' >{index+1}. {el}</li>
                                )}

                            </div>
                        }
                        {act== 4 &&
                            <div className=''>
                                {future.list.map((el,index)=>
                                    <li className='listitem' >{index+1}. {el}</li>
                                )}

                            </div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Problem;