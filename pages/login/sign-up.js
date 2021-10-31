import utilStyles from '../../styles/utils.module.css'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import SignUpImage from '../../public/images/SignUp_image-cropped.png'
import Button from '../../components/button'
import InputBox from '../../components/input'

const name = 'Sign Up'
export default function SignUp(){
    return(
        <div className={utilStyles.outerWrapper}>
            <Head>
                <title>Sign Up</title>
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
                    <div className={utilStyles.header}>Sign Up</div>
                    <div className={utilStyles.paragraph}>See your growth and get consulting support!</div>
                </div>
                <div className={utilStyles.inputWrapper}>
                    <div className={utilStyles.inputTitle}>Name<b style={{color:"#6056f5"}}>*</b></div>
                    <InputBox placeHolder="Name"/>
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
                        I agree to the <b style={{color:"#6056f5"}}>Terms & Conditions</b>
                    </span>
                </div>  
                <div className={utilStyles.buttonWrapper}>
                    <Button name="Sign Up" color="#fff" bgcolor="#6056f5"/>
                </div>
                <div className={utilStyles.inputWrapper}>
                    <span className={utilStyles.checkBoxText}>
                        Already have an Account? <Link href="/login/sign-in"><a style={{color:"#6056f5"}}>Sign In</a></Link>
                    </span>
                </div>
                </div>
            </div>
            <div className={utilStyles.rightDrawer}>
                <div className={utilStyles.imageWrapper}>
                    <Image
                    src={SignUpImage}
                    alt={name}/>
                </div>
            </div>
        </div>
    )
}