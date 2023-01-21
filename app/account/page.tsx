import React from 'react'

function Account() {
    return (

        <div className='flex items-stretch max-w-5xl justify-between m-auto'>
            <div className='w-1/2'>
                <div className='p-8 border border-slate-400'>
                    <h2 className='uppercase mb-3 text-xl font-bold'>Already a customer</h2>
                    <div className='pt-1'>
                        <div className='mt-4 mb-8 relative'>
                            <input
                                type={'email'}
                                placeholder="Email address"
                                className='h-[45px] align-middle w-full appearance-none bg-white border border-solid border-red-700 m-0 py-[11px] px-2.5 leading-[21px] block text-sm relative'
                            />
                            <label className='w-auto max-w-full opacity-0 absolute transition-opacity -top-[22px] left-[11px] block font-normal p-0 m-0'>
                                <span> Email Address </span>
                            </label>
                            <div className='text-red-700 mt-[5px] ml-[21px] hidden'>
                                <div className='text-sm leading-4'>This is a mandatory field.</div>
                            </div>
                        </div>
                        <div className='mt-4 mb-8 relative'>
                            <div className='relative block'>
                                <input
                                    type={'password'}
                                    placeholder="Password"
                                    className='h-[45px] align-middle w-full appearance-none bg-white border border-solid border-red-700 m-0 py-[11px] px-2.5 leading-[21px] block text-sm relative'
                                />
                                <span className='cursor-pointer h-[41px] bg-white pl-[5px] flex absolute top-[2px] right-2.5'>
                                    <span className='self-center pt-[2px] pr-[7px] text-xs leading-3 cursor-pointer hidden'>Show</span>
                                    <span className='self-center pt-[2px] pr-[7px] text-xs leading-3 cursor-pointer hidden'>Hide</span>
                                    <svg className='flex self-center' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.93813 9.7361C2.98625 8.91794 2.30688 7.98352 1.9875 7.50037C2.30625 7.01722 2.98625 6.0828 3.93813 5.26463C4.92125 4.42022 6.135 3.75018 7.5 3.75018C8.865 3.75018 10.0788 4.42022 11.0619 5.26463C12.0138 6.0828 12.6931 7.01722 13.0125 7.50037C12.6938 7.98352 12.0138 8.91794 11.0619 9.7361C10.0788 10.5805 8.865 11.2506 7.5 11.2506C6.135 11.2506 4.92125 10.5805 3.93813 9.7361ZM7.5 2.50012C5.7175 2.50012 4.22313 3.37204 3.12375 4.31646C2.02063 5.26463 1.255 6.33656 0.915003 6.85659C0.789398 7.0478 0.722473 7.27159 0.722473 7.50037C0.722473 7.72915 0.789398 7.95293 0.915003 8.14415C1.255 8.66417 2.02063 9.7361 3.12375 10.6843C4.22375 11.6287 5.7175 12.5006 7.5 12.5006C9.2825 12.5006 10.7769 11.6287 11.8763 10.6843C12.9794 9.7361 13.745 8.66417 14.085 8.14415C14.3419 7.75163 14.3419 7.24973 14.085 6.85659C13.745 6.33656 12.9794 5.26463 11.8763 4.31646C10.7763 3.37204 9.2825 2.50012 7.5 2.50012ZM6.25 7.50037C6.25 7.16883 6.3817 6.85087 6.61612 6.61644C6.85054 6.38201 7.16848 6.25031 7.5 6.25031C7.83152 6.25031 8.14947 6.38201 8.38389 6.61644C8.61831 6.85087 8.75 7.16883 8.75 7.50037C8.75 7.8319 8.61831 8.14986 8.38389 8.38429C8.14947 8.61873 7.83152 8.75043 7.5 8.75043C7.16848 8.75043 6.85054 8.61873 6.61612 8.38429C6.3817 8.14986 6.25 7.8319 6.25 7.50037ZM7.5 5.00024C6.83696 5.00024 6.20108 5.26365 5.73224 5.73251C5.26339 6.20138 5 6.83729 5 7.50037C5 8.16344 5.26339 8.79936 5.73224 9.26822C6.20108 9.73708 6.83696 10.0005 7.5 10.0005C8.16304 10.0005 8.79893 9.73708 9.26777 9.26822C9.73661 8.79936 10 8.16344 10 7.50037C10 6.83729 9.73661 6.20138 9.26777 5.73251C8.79893 5.26365 8.16304 5.00024 7.5 5.00024V5.00024Z" fill="black" />
                                    </svg>
                                    <svg className='hidden self-center' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.3169 3.56687C12.4307 3.449 12.4937 3.29112 12.4923 3.12725C12.4909 2.96338 12.4251 2.80662 12.3093 2.69074C12.1934 2.57486 12.0366 2.50913 11.8728 2.5077C11.7089 2.50628 11.551 2.56928 11.4331 2.68313L8.77 5.34563C8.29252 5.06376 7.73487 4.94863 7.1848 5.01834C6.63473 5.08806 6.12344 5.33866 5.73136 5.73074C5.33929 6.12281 5.08869 6.6341 5.01897 7.18417C4.94926 7.73425 5.06439 8.29189 5.34625 8.76938L2.68313 11.4331C2.62343 11.4908 2.57582 11.5597 2.54306 11.636C2.51031 11.7122 2.49307 11.7943 2.49235 11.8772C2.49162 11.9602 2.50744 12.0425 2.53886 12.1193C2.57029 12.1962 2.6167 12.2659 2.67538 12.3246C2.73406 12.3833 2.80385 12.4297 2.88066 12.4611C2.95747 12.4926 3.03977 12.5084 3.12275 12.5077C3.20574 12.5069 3.28775 12.4897 3.36401 12.4569C3.44026 12.4242 3.50922 12.3766 3.56688 12.3169L6.23 9.65437C6.70749 9.93624 7.26513 10.0514 7.81521 9.98166C8.36528 9.91194 8.87657 9.66134 9.26864 9.26926C9.66071 8.87719 9.91132 8.3659 9.98103 7.81583C10.0508 7.26575 9.93562 6.70811 9.65375 6.23062L12.3169 3.56687V3.56687ZM7.82375 6.29188C7.61176 6.23499 7.38852 6.23493 7.17649 6.2917C6.96446 6.34847 6.77112 6.46007 6.61591 6.61528C6.4607 6.77049 6.3491 6.96383 6.29233 7.17586C6.23556 7.38789 6.23562 7.61113 6.2925 7.82313L7.82375 6.29188ZM7.17625 8.7075L8.7075 7.17625C8.76439 7.38825 8.76445 7.61149 8.70768 7.82352C8.65091 8.03554 8.5393 8.22889 8.3841 8.38409C8.22889 8.5393 8.03555 8.6509 7.82352 8.70768C7.61149 8.76445 7.38825 8.76439 7.17625 8.7075V8.7075ZM9.85313 3.01313C9.14375 2.7 8.35438 2.5 7.5 2.5C5.7175 2.5 4.22313 3.37188 3.12375 4.31625C2.02063 5.26438 1.255 6.33625 0.915003 6.85625C0.789398 7.04746 0.722473 7.27123 0.722473 7.5C0.722473 7.72877 0.789398 7.95254 0.915003 8.14375C1.4114 8.89962 1.98717 9.60027 2.6325 10.2338L3.51625 9.35C2.94325 8.7886 2.43086 8.16853 1.9875 7.5C2.30625 7.01687 2.98625 6.0825 3.93813 5.26438C4.92125 4.42 6.135 3.75 7.5 3.75C7.97179 3.75179 8.44024 3.82923 8.8875 3.97938L9.85313 3.01313ZM7.5 11.25C7.02821 11.2482 6.55977 11.1708 6.1125 11.0206L5.1475 11.9875C5.8575 12.3 6.64625 12.5006 7.50063 12.5006C9.28313 12.5006 10.7775 11.6287 11.8769 10.6844C12.98 9.73625 13.7456 8.66438 14.0856 8.14438C14.3425 7.75188 14.3425 7.25 14.0856 6.85687C13.5892 6.101 13.0135 5.40035 12.3681 4.76687L11.4838 5.65C12.0568 6.21139 12.5692 6.83146 13.0125 7.5C12.6938 7.98313 12.0138 8.9175 11.0619 9.73562C10.0788 10.58 8.865 11.25 7.5 11.25Z" fill="black" />
                                    </svg>
                                </span>
                            </div>
                            <label className='w-auto max-w-full opacity-0 absolute transition-opacity -top-[22px] left-[11px] block font-normal p-0 m-0'>
                                <span> Password </span>
                            </label>
                            <div className='text-red-700 mt-[5px] ml-[21px] hidden'>
                                <div className='text-sm leading-4'>This is a mandatory field.</div>
                            </div>
                        </div>
                        <div className='justify-between mt-1.5 mb-0 flex'>
                            <div className='m-0 pr-[6px] relative before:table'>
                                <div className='float-left bg-white h-[22px] w-[22px] cursor-pointer m-0 p-0 block'>
                                    <span className='h-[22px] w-[22px] cursor-pointer border border-solid border-slate-100 font-sm leading-3 transition-all block relative'>
                                        <input
                                            type={'checkbox'}
                                            className='float-none h-[22px] w-[22px] block -mt-px -ml-px cursor-pointer opacity-0 border-none'
                                        />
                                    </span>
                                </div>
                                <label className='mt-1 ml-[30px] text-sm font-normal block'>Remember me</label>
                            </div>
                            <div className='text-right m-0 pl-[6px] text-sm'>
                                <a
                                    className='text-blue-500 bg-white transition-all cursor-pointer'
                                    title='You can reset your password here'>
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className='mb-0 justify-between flex my-8'>
                            <button
                                type='submit'
                                className='pt-3 px-5 pb-2.5 w-full block align-middle cursor-pointer text-white text-center uppercase appearance-none border border-solid bg-secondary-color bg-secondary-color text-base font-bold leading-[21px] transition-all tracking-wider'>
                                Log in
                            </button>
                        </div>
                        <div className='my-8 relative'>
                            <label className='leading-6 block'>
                                <div className='text-sm'>
                                    This site is protected by recaptcha and the google privacy policy and terms of service apply.
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
            </div>
        </div>

    )
}

export default Account