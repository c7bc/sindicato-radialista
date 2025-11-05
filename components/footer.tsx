export default function Footer() {
  return (
    <footer className="bg-brand-section py-12 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-x-8 gap-y-12 lg:flex-row lg:items-start">
          <div className="flex flex-col gap-6 md:max-w-sm">
            {/* Logo do Sindicato */}
            <div className="flex h-8 w-max items-center justify-start overflow-visible">
              <a className="flex items-center gap-2 text-white" href="#">
                <svg width="50" height="38" viewBox="0 0 329 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M158.167 0.0849915L169.266 0C169.264 4.845 166.797 21.675 175.28 19.473C182.988 17.472 176.574 6.46299 179.43 2.24399C181.629 1.83299 184.665 3.384 186.732 4.276C198.564 9.385 204.693 19.748 208.148 31.576C202.457 31.131 181.282 28.804 186.847 39.379C188.505 42.527 205.112 41.201 208.96 41.316L208.928 51.624C204.193 51.464 190.303 50.309 187.911 52.947C177.839 64.053 206.702 61.188 209.025 61.155L209.013 71.138C204.157 71.088 179.463 68.331 187.804 79.358C189.695 81.858 205.338 81.003 208.938 80.759L208.89 92.902L171.735 92.897L118.241 92.622L118.112 81.095C122.722 81.067 140.381 83.017 141.122 77.207C141.305 75.657 140.756 74.11 139.636 73.022C136.385 69.805 123.908 71.236 118.472 71.157C118.531 67.905 118.419 64.477 118.361 61.21C122.04 61.095 136.661 61.79 137.885 60.699C151.053 48.964 121.24 51.6 118.402 51.647C118.507 48.148 118.406 44.857 118.312 41.362C121.698 41.301 137.475 42.168 139.07 40.127C147.685 29.112 124.234 31.26 119.268 31.305C124.01 13.967 131.565 7.076 148.344 1.056C148.213 4.187 147.62 16.231 149.548 17.899C160.635 27.5 158.256 4.16499 158.167 0.0849915Z" fill="currentColor"/>
                  <path d="M118.266 103.047C122.755 102.87 127.699 102.952 132.202 103.005C157.695 103.306 183.411 102.473 208.877 103.097C208.041 128.169 213.32 145.106 195.349 164.005C170.57 189.498 123.904 174.958 118.708 139.246C117.201 128.887 118.717 114.114 118.266 103.047Z" fill="currentColor"/>
                  <path d="M220.938 102.067C225.591 102.142 230.441 102.036 235.11 102.001C235.111 115.148 236.002 135.625 233.318 147.485C229.062 165.76 217.71 181.591 201.765 191.484C190.113 198.839 184.426 200.042 170.97 202.254C170.851 212.253 170.848 222.252 170.961 232.251C180.666 231.814 193.708 232.149 203.618 232.142L203.544 246.536L124 246.653C124.055 241.785 123.971 236.916 123.748 232.053L156.461 232.183C156.556 222.198 156.498 212.213 156.287 202.23C141.093 201.509 123.549 192.484 113.025 181.667C88.9602 156.933 92.5702 132.946 92.3972 102.116C97.0532 102.177 101.833 102.09 106.499 102.062C106.389 128.399 102.911 151.231 123.051 171.429C145.617 194.06 181.692 194.126 204.099 171.45C224.703 150.598 221.066 128.533 220.938 102.067Z" fill="currentColor"/>
                  <path d="M29.8432 36.9401C33.2712 39.0101 37.3402 43.9411 39.9492 46.9781C28.2602 62.8221 18.3522 79.7501 15.4932 99.6221C11.9092 124.529 15.5432 149.495 28.3622 171.422C32.3042 178.165 35.7652 182.184 40.2322 188.244C38.6202 190.199 35.5572 193.129 33.6662 195.032C32.4612 196.151 31.8132 197.022 30.2212 197.303C29.8182 197.083 28.9092 196.588 28.6052 196.237C-10.3358 151.322 -9.1278 81.0051 29.8432 36.9401Z" fill="currentColor"/>
                  <path d="M297.298 37.3781C305.079 39.8001 319.774 71.5371 322.21 78.8521C332.366 110.195 329.787 144.276 315.029 173.733C313.059 177.64 302.379 196.421 298.398 197.728C296.511 197.241 297.032 197.28 295.489 195.472C292.931 192.793 291.619 191.621 288.723 189.301C289.893 185.994 295.586 178.394 297.819 174.84C307.13 159.828 312.674 142.788 313.978 125.171C316.029 95.0731 307.092 69.7781 287.518 47.1761C290.756 44.2931 294.237 40.5291 297.298 37.3781Z" fill="currentColor"/>
                  <path d="M278.306 56.979C280.283 58.537 282.335 61.485 283.783 63.591C298.235 84.864 303.567 111.038 298.59 136.269C296.624 146.602 287.31 171.94 278.934 177.605C277.294 177.465 277.731 177.415 276.195 176.07C273.547 173.487 271.176 171.344 269.013 168.331C270.9 164.835 274.059 160.442 276.141 156.719C282.63 145.122 285.359 134.856 286.253 121.748C287.706 101.883 281.177 82.259 268.111 67.225C271.367 63.787 274.94 60.334 278.306 56.979Z" fill="currentColor"/>
                  <path d="M49.9901 57.363C52.2191 58.44 58.2041 65.037 60.2631 67.195C57.4471 71.023 54.5791 74.666 52.2341 78.814C35.2901 108.792 39.6481 141.738 60.1311 168.272C57.9961 170.54 55.5481 172.9 53.3321 175.122L50.1111 178.078C38.5951 165.597 29.9981 145.223 28.5201 128.381C26.0561 100.31 32.2541 78.894 49.9901 57.363Z" fill="currentColor"/>
                  <path d="M257.811 76.9021C258.369 77.2521 259.467 78.1691 259.893 78.7061C274.561 97.1891 276.096 125.284 266.604 146.433C264.94 150.143 261.803 155.767 258.776 158.449C257.044 158.43 257.925 158.626 256.205 157.067L248.015 149.267C261.09 126.822 263.379 109.381 248.163 86.9391C251.352 83.5671 254.568 80.2211 257.811 76.9021Z" fill="currentColor"/>
                  <path d="M69.5461 76.9711C72.7631 78.9321 77.3241 83.9771 80.0841 86.8701C73.0441 98.8461 69.2272 106.372 69.9142 120.67C70.5192 133.267 74.0061 138.619 80.2221 149.103C78.0351 151.209 75.8692 153.336 73.7242 155.484L70.0732 159.172C62.7932 150.438 58.0521 139.871 56.3681 128.626C53.5001 109.6 58.1581 92.3141 69.5461 76.9711Z" fill="currentColor"/>
                </svg>
                <div className="flex flex-col text-sm font-semibold">
                  <span>SINDICATO DOS</span>
                  <span>RADIALISTAS</span>
                </div>
              </a>
            </div>
            <p className="text-md text-white">
              Representando e defendendo os direitos dos radialistas com força e dedicação.
            </p>
          </div>

          <nav>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:grid-cols-[repeat(6,max-content)]">
              <li>
                <a
                  className="group relative inline-flex h-max cursor-pointer items-center whitespace-nowrap outline-brand transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2 justify-normal rounded p-0! gap-1.5 text-white hover:text-white/80"
                  href="/"
                >
                  <span className="underline decoration-transparent underline-offset-2 hover:decoration-current transition-inherit-all">
                    Início
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group relative inline-flex h-max cursor-pointer items-center whitespace-nowrap outline-brand transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2 justify-normal rounded p-0! gap-1.5 text-white hover:text-white/80"
                  href="/sindicato"
                >
                  <span className="underline decoration-transparent underline-offset-2 hover:decoration-current transition-inherit-all">
                    Sindicato
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group relative inline-flex h-max cursor-pointer items-center whitespace-nowrap outline-brand transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2 justify-normal rounded p-0! gap-1.5 text-white hover:text-white/80"
                  href="/juridico"
                >
                  <span className="underline decoration-transparent underline-offset-2 hover:decoration-current transition-inherit-all">
                    Jurídico
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group relative inline-flex h-max cursor-pointer items-center whitespace-nowrap outline-brand transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2 justify-normal rounded p-0! gap-1.5 text-white hover:text-white/80"
                  href="/publicacoes"
                >
                  <span className="underline decoration-transparent underline-offset-2 hover:decoration-current transition-inherit-all">
                    Publicações
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group relative inline-flex h-max cursor-pointer items-center whitespace-nowrap outline-brand transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2 justify-normal rounded p-0! gap-1.5 text-white hover:text-white/80"
                  href="/servicos"
                >
                  <span className="underline decoration-transparent underline-offset-2 hover:decoration-current transition-inherit-all">
                    Serviços
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="group relative inline-flex h-max cursor-pointer items-center whitespace-nowrap outline-brand transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2 justify-normal rounded p-0! gap-1.5 text-white hover:text-white/80"
                  href="/contato"
                >
                  <span className="underline decoration-transparent underline-offset-2 hover:decoration-current transition-inherit-all">
                    Contato
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-brand_alt pt-8 md:mt-16 md:flex-row">
          <p className="text-md text-white">
            © 2025 Sindicato dos Radialistas. Todos os direitos reservados.
          </p>
          <ul className="flex gap-6">
            <li>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex rounded-xs text-white outline-focus-ring transition duration-100 ease-linear hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 22" fill="none" aria-label="X (formerly Twitter)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9455 22L10.396 14.0901L3.44886 22H0.509766L9.09209 12.2311L0.509766 0H8.05571L13.286 7.45502L19.8393 0H22.7784L14.5943 9.31648L23.4914 22H15.9455ZM19.2185 19.77H17.2398L4.71811 2.23H6.6971L11.7121 9.25316L12.5793 10.4719L19.2185 19.77Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex rounded-xs text-white outline-focus-ring transition duration-100 ease-linear hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Facebook">
                  <path
                    d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex rounded-xs text-white outline-focus-ring transition duration-100 ease-linear hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Instagram">
                  <path
                    d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.6187 2.31563 19.6219 2.70469 20.3156 2.99531C21.2219 3.36563 21.8969 3.80625 22.5938 4.50313C23.2906 5.2 23.7313 5.875 24.1016 6.78125C24.3922 7.475 24.7812 8.47813 24.8656 10.25C24.9219 11.5109 24.9359 11.8906 24.9359 15.0969C24.9359 18.3031 24.9219 18.6828 24.8656 19.9438C24.7812 21.7156 24.3922 22.7188 24.1016 23.4125C23.7313 24.3188 23.2906 24.9938 22.5938 25.6906C21.8969 26.3875 21.2219 26.8281 20.3156 27.1984C19.6219 27.4891 18.6187 27.8781 16.8469 27.9625C15.5859 28.0188 15.2063 28.0328 12 28.0328C8.79375 28.0328 8.41406 28.0188 7.15313 27.9625C5.38125 27.8781 4.37813 27.4891 3.68438 27.1984C2.77813 26.8281 2.10313 26.3875 1.40625 25.6906C0.709375 24.9938 0.26875 24.3188 -0.101562 23.4125C-0.392187 22.7188 -0.78125 21.7156 -0.865625 19.9438C-0.921875 18.6828 -0.935937 18.3031 -0.935937 15.0969C-0.935937 11.8906 -0.921875 11.5109 -0.865625 10.25C-0.78125 8.47813 -0.392187 7.475 -0.101562 6.78125C0.26875 5.875 0.709375 5.2 1.40625 4.50313C2.10313 3.80625 2.77813 3.36563 3.68438 2.99531C4.37813 2.70469 5.38125 2.31563 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33437 0.0140625 7.05469 0.0703125C5.775 0.126563 4.90313 0.52500 4.14375 1.00781C3.35156 1.49063 2.68125 2.08594 2.01094 2.75625C1.34063 3.42656 0.745312 4.09687 0.2625 4.88906C-0.220313 5.64844 -0.618750 6.52031 -0.675000 7.8C-0.731250 9.07969 -0.745312 9.48750 -0.745312 12.7453C-0.745312 16.0031 -0.731250 16.4109 -0.675000 17.6906C-0.618750 18.9703 -0.220313 19.8422 0.2625 20.6016C0.745312 21.3938 1.34063 22.0641 2.01094 22.7344C2.68125 23.4047 3.35156 23.9906 4.14375 24.4828C4.90313 24.9656 5.775 25.3641 7.05469 25.4203C8.33437 25.4766 8.74219 25.4906 12 25.4906C15.2578 25.4906 15.6656 25.4766 16.9453 25.4203C18.225 25.3641 19.0969 24.9656 19.8562 24.4828C20.6484 23.9906 21.3187 23.4047 21.9891 22.7344C22.6594 22.0641 23.2453 21.3938 23.7375 20.6016C24.2203 19.8422 24.6187 18.9703 24.675 17.6906C24.7312 16.4109 24.7453 16.0031 24.7453 12.7453C24.7453 9.48750 24.7312 9.07969 24.675 7.8C24.6187 6.52031 24.2203 5.64844 23.7375 4.88906C23.2547 4.09687 22.6594 3.42656 21.9891 2.75625C21.3187 2.08594 20.6484 1.5 19.8562 1.00781C19.0969 0.525 18.225 0.126562 16.9453 0.0703125C15.6656 0.0140625 15.2578 0 12 0Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 6.35156C8.59688 6.35156 5.85938 9.08906 5.85938 12.4922C5.85938 15.8953 8.59688 18.6328 12 18.6328C15.4031 18.6328 18.1406 15.8953 18.1406 12.4922C18.1406 9.08906 15.4031 6.35156 12 6.35156ZM12 16.4734C9.79219 16.4734 8.01875 14.7 8.01875 12.4922C8.01875 10.2844 9.79219 8.51094 12 8.51094C14.2078 8.51094 15.9812 10.2844 15.9812 12.4922C15.9812 14.7 14.2078 16.4734 12 16.4734Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19.8469 6.10781C19.8469 6.96563 19.1531 7.65938 18.2953 7.65938C17.4375 7.65938 16.7437 6.96563 16.7437 6.10781C16.7437 5.25 17.4375 4.55625 18.2953 4.55625C19.1531 4.55625 19.8469 5.25 19.8469 6.10781Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex rounded-xs text-white outline-focus-ring transition duration-100 ease-linear hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="YouTube">
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
