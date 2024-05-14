import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["greek"] });
const HeaderSection = () => {
  return (
    <>
      <div className="flex justify-between py-10 lg:px-14 tab:px-14 items-center mobile:px-10">
        <div>
          <svg
            className="mobile:w-[7.25rem] tab:w-auto"
            width="181"
            height="32"
            viewBox="0 0 181 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M38.1554 13.7823V3.89667C38.0927 2.99556 37.3389 2.28407 36.4221 2.28407H28.0645C28.0536 2.28407 28.0457 2.28407 28.0348 2.28564H28.0332C28.0222 2.28407 28.0128 2.28407 28.0019 2.28407C27.9094 2.28407 27.8216 2.30288 27.7401 2.33736C27.7354 2.33892 27.7292 2.34206 27.7229 2.34519C27.5866 2.39377 27.4612 2.47213 27.3562 2.57713L15.2876 21.005C15.2546 21.0379 15.2186 21.0693 15.1826 21.0943C15.1638 21.11 15.1449 21.1241 15.1261 21.1366C14.4899 21.5598 13.5856 21.1178 13.5794 20.3013C13.5778 20.2998 13.5794 20.2966 13.5794 20.2966V3.92802C13.5323 3.00967 12.7723 2.28094 11.843 2.28094H1.7364C0.777307 2.28094 0 3.05825 0 4.01734V25.1391C0 26.07 0.728725 26.8285 1.64708 26.8755H12.5733H12.5733C12.5811 26.8755 12.5905 26.8755 12.5983 26.8771C12.6281 26.8771 12.6563 26.8787 12.6861 26.8818C12.7143 26.8834 12.7441 26.8881 12.7723 26.8944C13.2283 26.9884 13.5731 27.3927 13.5731 27.877V30.9924C13.5731 31.544 14.0213 31.9922 14.5745 31.9922H15.7076C15.974 31.9922 16.2278 31.8872 16.4159 31.6991L37.8624 14.4906C37.8921 14.4593 37.9172 14.4326 37.9423 14.3982C37.9423 14.3982 37.9428 14.3977 37.9435 14.3967C37.944 14.3959 37.9447 14.3948 37.9454 14.3934C38.0755 14.2289 38.1476 14.0267 38.1539 13.8152C38.1554 13.8042 38.1554 13.7932 38.1554 13.7823ZM122.233 26.5256V12.1467H118.029V9.92094H122.233V2.92578H124.706V9.92094H128.875V12.1467H124.706V26.5256H122.233ZM91.9239 26.8789C90.2516 26.8789 88.756 26.5021 87.4371 25.7484C86.1181 24.9947 85.07 23.9584 84.2928 22.6394C83.5391 21.3205 83.1623 19.8366 83.1623 18.188C83.1623 16.5628 83.5391 15.1025 84.2928 13.8071C85.0465 12.4882 86.071 11.4519 87.3664 10.6982C88.6618 9.94449 90.1103 9.56765 91.7119 9.56765C93.2193 9.56765 94.55 9.90917 95.7041 10.5922C96.8817 11.2752 97.8003 12.2291 98.4598 13.4539C99.1428 14.655 99.4843 16.0447 99.4843 17.6227C99.4843 17.8111 99.4725 18.0349 99.449 18.2939C99.4254 18.5295 99.3783 18.8121 99.3076 19.1418H85.6953C85.7992 19.9989 86.0383 20.7762 86.4125 21.4736C86.9542 22.4392 87.6962 23.1929 88.6383 23.7346C89.6039 24.2763 90.7109 24.5472 91.9592 24.5472C92.972 24.5472 93.9023 24.3705 94.7502 24.0173C95.5981 23.6404 96.3165 23.0869 96.9053 22.3568L98.4951 23.9819C97.7178 24.9005 96.7522 25.6188 95.5981 26.137C94.4676 26.6316 93.2428 26.8789 91.9239 26.8789ZM86.3772 14.8317C86.0307 15.4751 85.8056 16.2053 85.7018 17.0221H97.0636C97.0016 16.1252 96.7958 15.3361 96.446 14.655C96.022 13.76 95.3979 13.077 94.5736 12.606C93.7728 12.1113 92.7953 11.864 91.6412 11.864C90.44 11.864 89.392 12.1231 88.4969 12.6413C87.602 13.1594 86.8954 13.8896 86.3772 14.8317ZM47.1953 9.92094L54.8617 26.5256H56.3102L64.0473 9.92094H61.3623L55.6411 22.7003L49.951 9.92094H47.1953ZM66.8524 16.3862V18.7532H78.1223V16.3862H66.8524ZM106.482 26.5256C107.307 26.7611 108.167 26.8789 109.062 26.8789C110.899 26.8789 112.347 26.4432 113.407 25.5717C114.49 24.6767 115.032 23.4873 115.032 22.0035C115.032 20.9436 114.808 20.1075 114.361 19.4951C113.937 18.8592 113.372 18.3646 112.665 18.0113C111.959 17.6345 111.217 17.3401 110.439 17.1281C109.662 16.8925 108.92 16.6688 108.214 16.4568C107.531 16.2213 106.965 15.9269 106.518 15.5736C106.07 15.1968 105.847 14.6904 105.847 14.0544C105.847 13.395 106.117 12.865 106.659 12.4646C107.224 12.0407 108.037 11.8287 109.097 11.8287C110.015 11.8287 110.84 12.0054 111.57 12.3586C112.324 12.6884 112.948 13.1712 113.442 13.8071L115.032 12.2173C114.42 11.3459 113.607 10.6864 112.594 10.2389C111.582 9.7914 110.451 9.56765 109.203 9.56765C108.025 9.56765 107.001 9.76785 106.129 10.1682C105.281 10.5451 104.622 11.0868 104.151 11.7934C103.703 12.4764 103.48 13.289 103.48 14.2311C103.48 15.2203 103.691 16.0211 104.115 16.6335C104.563 17.2458 105.14 17.7287 105.847 18.082C106.553 18.4117 107.295 18.6943 108.072 18.9299C108.85 19.1418 109.58 19.3656 110.263 19.6011C110.969 19.8366 111.546 20.1546 111.994 20.555C112.441 20.9554 112.665 21.5089 112.665 22.2155C112.665 22.9692 112.347 23.558 111.711 23.9819C111.099 24.4059 110.239 24.6178 109.132 24.6178C108.096 24.6178 107.154 24.4294 106.306 24.0526C105.482 23.6522 104.74 23.0516 104.08 22.2508L102.49 23.8759C102.985 24.4883 103.562 25.0182 104.221 25.4657C104.904 25.9132 105.658 26.2665 106.482 26.5256ZM131.822 22.5334C131.822 25.2891 134.154 26.8789 137.475 26.8789C141.608 26.8789 144.859 24.9711 145.989 21.6149H146.095V26.5256H147.473V15.4323C147.473 11.8287 145.353 8.82574 140.266 8.82574C135.073 8.82574 132.246 11.7934 132.246 15.2203V15.397H133.801V15.2203C133.801 11.8287 136.062 10.2389 140.195 10.2389C144.329 10.2389 145.989 11.8287 145.989 15.6089V17.1634L137.404 18.1526C134.366 18.5059 131.822 19.6011 131.822 22.5334ZM137.722 25.5717C134.684 25.5717 133.377 24.4765 133.377 22.4274C133.377 20.2724 134.896 19.5658 137.97 19.2478L145.989 18.3293V18.6472C145.989 23.346 142.138 25.5717 137.722 25.5717ZM155.491 26.5256V12.1467H151.287V9.92094H155.491V2.92578H157.964V9.92094H162.133V12.1467H157.964V26.5256H155.491ZM168.839 25.7484C170.158 26.5021 171.653 26.8789 173.326 26.8789C174.645 26.8789 175.869 26.6316 177 26.137C178.154 25.6188 179.12 24.9005 179.897 23.9819L178.307 22.3568C177.718 23.0869 177 23.6404 176.152 24.0173C175.304 24.3705 174.374 24.5472 173.361 24.5472C172.113 24.5472 171.006 24.2763 170.04 23.7346C169.098 23.1929 168.356 22.4392 167.814 21.4736C167.44 20.7762 167.201 19.9989 167.097 19.1418H180.709C180.78 18.8121 180.827 18.5295 180.851 18.2939C180.874 18.0349 180.886 17.8111 180.886 17.6227C180.886 16.0447 180.545 14.655 179.862 13.4539C179.202 12.2291 178.284 11.2752 177.106 10.5922C175.952 9.90917 174.621 9.56765 173.114 9.56765C171.512 9.56765 170.064 9.94449 168.768 10.6982C167.473 11.4519 166.448 12.4882 165.695 13.8071C164.941 15.1025 164.564 16.5628 164.564 18.188C164.564 19.8366 164.941 21.3205 165.695 22.6394C166.472 23.9584 167.52 24.9947 168.839 25.7484ZM167.104 17.0221C167.207 16.2053 167.433 15.4751 167.779 14.8317C168.297 13.8896 169.004 13.1594 169.899 12.6413C170.794 12.1231 171.842 11.864 173.043 11.864C174.197 11.864 175.175 12.1113 175.975 12.606C176.8 13.077 177.424 13.76 177.848 14.655C178.198 15.3361 178.403 16.1252 178.465 17.0221H167.104Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center text-head-meun mobile:hidden">
            <div>
              <p>
                <a href="">Home</a>
              </p>
            </div>
            <div>
              <p>
                <a href="">About</a>
              </p>
            </div>
            <div>
              <p>
                <a href="">Connect</a>
              </p>
            </div>
          </div>
          <div className="mr-6">
            <svg
              className="mobile:w-[2.81rem] tab:w-auto"
              width="59"
              height="12"
              viewBox="0 0 59 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.193359"
                y="0.697266"
                width="47.8063"
                height="1.21955"
                fill="white"
                stroke="white"
                stroke-width="0.15"
              />
              <rect
                width="47.8063"
                height="1.21955"
                transform="matrix(1 0.000212852 -0.000143113 1 10.1934 10.0732)"
                fill="white"
                stroke="white"
                stroke-width="0.15"
              />
            </svg>
          </div>

          <div className="mx-3 mobile:hidden tab:flex">
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="27.0273" cy="27.0254" r="27" fill="#CDEA67" />
              <path
                d="M34.0854 19.9101C33.164 18.984 32.0665 18.2497 30.8569 17.7501C29.6473 17.2505 28.3499 16.9955 27.0402 17.0001C21.5528 17.0001 17.0804 21.4501 17.0804 26.9101C17.0804 28.6601 17.5427 30.3601 18.407 31.8601L17 37.0001L22.2764 35.6201C23.7337 36.4101 25.3719 36.8301 27.0402 36.8301C32.5276 36.8301 37 32.3801 37 26.9201C37 24.2701 35.9648 21.7801 34.0854 19.9101ZM27.0402 35.1501C25.5528 35.1501 24.0955 34.7501 22.8191 34.0001L22.5176 33.8201L19.3819 34.6401L20.2161 31.6001L20.0151 31.2901C19.1887 29.977 18.7499 28.4593 18.7487 26.9101C18.7487 22.3701 22.4673 18.6701 27.0301 18.6701C29.2412 18.6701 31.3216 19.5301 32.8794 21.0901C33.6507 21.854 34.262 22.7627 34.6778 23.7635C35.0936 24.7642 35.3056 25.8372 35.3015 26.9201C35.3216 31.4601 31.603 35.1501 27.0402 35.1501ZM31.5829 28.9901C31.3317 28.8701 30.1055 28.2701 29.8844 28.1801C29.6533 28.1001 29.4925 28.0601 29.3216 28.3001C29.1508 28.5501 28.6784 29.1101 28.5377 29.2701C28.397 29.4401 28.2462 29.4601 27.995 29.3301C27.7437 29.2101 26.9397 28.9401 25.995 28.1001C25.2513 27.4401 24.7588 26.6301 24.608 26.3801C24.4673 26.1301 24.5879 26.0001 24.7186 25.8701C24.8291 25.7601 24.9698 25.5801 25.0905 25.4401C25.2111 25.3001 25.2613 25.1901 25.3417 25.0301C25.4221 24.8601 25.3819 24.7201 25.3216 24.6001C25.2613 24.4801 24.7588 23.2601 24.5578 22.7601C24.3568 22.2801 24.1457 22.3401 23.995 22.3301H23.5126C23.3417 22.3301 23.0804 22.3901 22.8492 22.6401C22.6281 22.8901 21.9849 23.4901 21.9849 24.7101C21.9849 25.9301 22.8794 27.1101 23 27.2701C23.1206 27.4401 24.7588 29.9401 27.2513 31.0101C27.8442 31.2701 28.3065 31.4201 28.6683 31.5301C29.2613 31.7201 29.804 31.6901 30.2362 31.6301C30.7186 31.5601 31.7136 31.0301 31.9146 30.4501C32.1256 29.8701 32.1256 29.3801 32.0553 29.2701C31.9849 29.1601 31.8342 29.1101 31.5829 28.9901Z"
                fill="black"
              />
            </svg>
          </div>
          <button className="bg-prime-green rounded-full px-8 py-4 mobile:hidden tab:flex">
            <p className={`${manrope.className} font-semibold text-base`}>
              Book A Demo
            </p>
          </button>
        </div>
      </div>
    </>
  );
};
export default HeaderSection;
