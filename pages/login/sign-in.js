import utilStyles from '../../styles/utils.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import SignInImage from '../../public/images/SignIn_Image_Cropped.png'
import Button from '../../components/button'
import InputBox from '../../components/input'

const name = 'Login'
export default function SignIn(){
    return(
        <div className={utilStyles.outerWrapper}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/images/Logo.png"/>
            </Head>
            <div className={utilStyles.leftDrawer}>
                <div className={utilStyles.leftDrawerContents}>
                <Link href="/">    
                <a  title="Click here to go back to homepage">
                    <div>
                    <Image
                    src="/images/Logo.png"
                    height={30}
                    width={28}
                    />
                    </div>
                </a>
                </Link>
                <div style={{paddingTop:"3%",paddingBottom:"3%"}}>
                    <div className={utilStyles.header}>Login</div>
                    <div className={utilStyles.paragraph}>See your growth and get consulting support!</div>
                </div>  
                <div className={utilStyles.inputWrapper}>
                    <div className={utilStyles.inputTitle}>Email<b style={{color:"#6056f5"}}>*</b></div>
                    <InputBox placeHolder="mail@website.com"/>
                </div> 
                <div className={utilStyles.inputWrapper}>
                    <div className={utilStyles.inputTitle}>Password<b style={{color:"#6056f5"}}>*</b></div>
                    <InputBox placeHolder="Min.8 character"/>
                </div>
                <div className={utilStyles.inputWrapper}>
                    <span><input type="checkbox" className={utilStyles.checkBoxItem}></input></span>
                    <span className={utilStyles.checkBoxText}>
                        Remember me
                    </span>
                    <span className={utilStyles.checkBoxText} style={{paddingLeft:"45%",color:"#6056f5"}}>
                        Forgot Password?
                    </span>
                </div>  
                <div className={utilStyles.buttonWrapper}>
                    <Button name="Login" color="#fff" bgcolor="#6056f5"/>
                </div>
                <div className={utilStyles.inputWrapper}>
                    <span className={utilStyles.checkBoxText}>
                        Not registered yet? <Link href="/login/sign-up"><a style={{color:"#6056f5"}}>Create an Account</a></Link>
                    </span>
                </div>
                </div>
            </div>
            <div className={utilStyles.rightDrawer}>
                <div className={utilStyles.imageWrapper}>
                    <Image
                    src={SignInImage}
                    alt={name}/>
                </div>
            </div>
        </div>
    )
}