import test from '@playwright/test'
import { LaunchAPP } from './03_Usecase'

test(`Launch application through utility class`,async({page})=>{

   const launchap=new LaunchAPP(page)
    await launchap.loadurl()
})