function App() {
	return (
		<>
			<div class="bg-gray-300 p-[50px] grid grid-flow-col justify-evenly justify-items-center items-center w-full gap-[1rem]">
				{/* Card 1 */}
				<article class="bg-white rounded-[8px]">
					<div class="p-[25px]">
						<section class="grid grid-flow-row">
							<header>
								<div class="w-fit h-[127px] grid items-center justify-items-center mb-[20px]">
									{/* Icon background */}
									<svg
										width="130"
										height="127"
										viewBox="0 0 130 127"
										fill="none"
										role="img"
										aria-label="Icon Background"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M64.8855 0C108.161 27.1474 129.771 52.4757 129.771 75.9299C129.771 111.125 100.707 127 64.8855 127C29.0636 127 0 111.125 0 75.9299C0 52.4757 21.6378 27.1749 64.8855 0Z"
											fill="#DDF2F3"
										/>
									</svg>
									{/* Icon */}
									<svg
										class="absolute"
										width="47"
										height="70"
										viewBox="0 0 47 70"
										fill="none"
										role="img"
										aria-label="Icon"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0 69.1797C0 69.6331 0.365203 70 0.816602 70H46.1834C46.6348 70 47 69.6331 47 69.1797V12.2135C47 11.7601 46.6348 11.3932 46.1834 11.3932H28.8533V0.820312C28.8533 0.366862 28.4881 0 28.0367 0H18.9633C18.5119 0 18.1467 0.366862 18.1467 0.820312V11.3932H0.816602C0.365203 11.3932 0 11.7601 0 12.2135V69.1797ZM45.3668 68.3594H1.6332V13.0339H18.1467V19.0495C18.1467 19.5029 18.5119 19.8698 18.9633 19.8698H28.0367C28.4881 19.8698 28.8533 19.5029 28.8533 19.0495V13.0339H45.3668V68.3594ZM19.7799 18.2292H27.2201V1.64062H19.7799V18.2292ZM9.88996 63.1641H25.7683V61.5234H9.88996V63.1641ZM37.11 58.6068H9.88996V56.9661H37.11V58.6068ZM36.2934 53.2292H37.9266C37.9266 47.4528 34.0795 42.1914 28.5516 40.0951C30.5908 38.5342 31.8384 36.0824 31.8384 33.4391C31.8384 28.8203 28.0979 25.0651 23.5 25.0651C18.9021 25.0651 15.1639 28.8226 15.1639 33.4391C15.1639 36.0824 16.4092 38.5319 18.4484 40.0951C12.9205 42.1914 9.07336 47.4528 9.07336 53.2292H10.7066C10.7066 47.5918 14.8826 42.5059 20.6396 41.1364C20.9799 41.0544 21.2317 40.765 21.2634 40.4141C21.2952 40.0654 21.1024 39.7305 20.7825 39.5892C18.3622 38.5091 16.7993 36.096 16.7993 33.4391C16.7993 29.7272 19.8071 26.7057 23.5023 26.7057C27.1997 26.7057 30.2052 29.7272 30.2052 33.4391C30.2052 36.0938 28.6423 38.5068 26.222 39.5892C25.9022 39.7305 25.7094 40.0654 25.7411 40.4141C25.7729 40.765 26.0247 41.0544 26.3649 41.1364C32.1174 42.5059 36.2934 47.5918 36.2934 53.2292Z"
											fill="#1DA5AB"
										/>
									</svg>
								</div>
								{/* Heading */}
								<h3 class="font-days-one text-[#2a3273] text-[20px] mb-[5px]">
									Long- term Supply
								</h3>
							</header>
							{/* Content */}
							<p class="font-catamaran text-[18px] text-[#333] mb-[30px]">
								Long-term supply assignments provide a level of security without
								being tied in to a school indefinitely.
							</p>
							<footer>
								{/* Link */}
								<a
									href="https://example.org/"
									class="grid grid-flow-col items-center justify-start w-fit"
								>
									<span
										class="font-catamaran font-[900] text-[18px] text-[#812c97] mr-[8.5px] w-fit"
										aria-label="Find out more"
									>
										Find out more
									</span>
									<div class="rounded-full bg-[#812C97] bg-opacity-[0.25]">
										<svg
											width="25"
											height="25"
											viewBox="0 0 25 25"
											fill="none"
											role="img"
											aria-label="Arrow Icon"
										>
											<path
												d="M6.25 13.6719C5.81853 13.6719 5.46875 13.3221 5.46875 12.8906C5.46875 12.4592 5.81853 12.1094 6.25 12.1094V13.6719ZM19.5312 12.1094C19.9627 12.1094 20.3125 12.4592 20.3125 12.8906C20.3125 13.3221 19.9627 13.6719 19.5312 13.6719V12.1094ZM18.9914 12.3259C19.3033 12.0277 19.7979 12.0389 20.096 12.3508C20.3941 12.6627 20.383 13.1572 20.0711 13.4554L18.9914 12.3259ZM14.7586 18.5335C14.4467 18.8316 13.9521 18.8205 13.654 18.5086C13.3559 18.1967 13.367 17.7021 13.6789 17.404L14.7586 18.5335ZM20.0711 12.3259C20.383 12.624 20.3941 13.1186 20.096 13.4305C19.7979 13.7424 19.3033 13.7535 18.9914 13.4554L20.0711 12.3259ZM13.6789 8.37724C13.367 8.0791 13.3559 7.58457 13.654 7.27267C13.9521 6.96077 14.4467 6.94962 14.7586 7.24776L13.6789 8.37724ZM6.25 12.1094H19.5312V13.6719H6.25V12.1094ZM20.0711 13.4554L14.7586 18.5335L13.6789 17.404L18.9914 12.3259L20.0711 13.4554ZM18.9914 13.4554L13.6789 8.37724L14.7586 7.24776L20.0711 12.3259L18.9914 13.4554Z"
												fill="white"
											/>
										</svg>
									</div>
								</a>
							</footer>
						</section>
					</div>
				</article>

				{/* Card 2 */}
				<article class="bg-white w-full">
					<div class="p-[25px]">
						<section class="grid grid-flow-row content-start w-[90%]">
							<header>
								{/* Icon background */}
								<div
									class="w-[75px] h-[75px] grid items-center content-center justify-center justify-items-center rounded-full bg-[#812C97] bg-opacity-[0.15] mb-[20px]"
									role="img"
									aria-label="Icon Background"
								>
									{/* Icon */}
									<svg
										width="41"
										height="44"
										viewBox="0 0 41 44"
										fill="none"
										role="img"
										aria-label="Icon"
									>
										<path
											d="M32.2566 43.5938H31.2441V33.0469C31.2441 28.0519 27.8495 23.76 22.9866 22.6069C22.7757 22.5563 22.6196 22.3777 22.5999 22.1625C22.5788 21.946 22.6998 21.7406 22.898 21.6521C25.0313 20.7028 26.408 18.585 26.408 16.2577C26.408 13.0008 23.7587 10.35 20.5018 10.35C17.2449 10.35 14.5941 12.9994 14.5941 16.2577C14.5941 18.585 15.9723 20.7042 18.1041 21.6521C18.3024 21.7406 18.4234 21.946 18.4023 22.1625C18.3826 22.3777 18.2265 22.5577 18.0155 22.6069C13.1527 23.76 9.75805 28.0519 9.75805 33.0469V43.5938H8.74414V33.0469C8.74414 27.9956 11.918 23.5997 16.598 21.9671C14.7334 20.6916 13.5802 18.5625 13.5802 16.2563C13.5802 13.4944 15.2073 11.1038 17.5543 9.99565C17.8299 9.30518 17.9691 8.57393 17.9691 7.82018C17.9691 4.5633 15.3198 1.91252 12.0629 1.91252C8.80602 1.91252 6.15523 4.5619 6.15523 7.82018C6.15523 10.1489 7.53336 12.2667 9.66523 13.2146C9.86492 13.3031 9.98305 13.5085 9.96336 13.725C9.94367 13.9402 9.78758 14.1202 9.57664 14.1694C4.71383 15.3225 1.31914 19.6144 1.31914 24.6094V35.1563H0.306641V24.6094C0.306641 19.5581 3.48055 15.1622 8.16055 13.5296C6.29586 12.2541 5.14414 10.125 5.14414 7.82018C5.14414 4.00502 8.24774 0.901428 12.0629 0.901428C15.878 0.901428 18.9816 4.00502 18.9816 7.82018C18.9816 8.41362 18.9085 8.9958 18.7609 9.55971C19.8732 9.27143 21.1276 9.27143 22.2385 9.55971C22.0923 8.9958 22.0177 8.41362 22.0177 7.82018C22.0177 4.00502 25.1227 0.901428 28.9379 0.901428C32.753 0.901428 35.858 4.00502 35.858 7.82018C35.858 10.1264 34.7049 12.2555 32.8402 13.531C37.5216 15.1636 40.6955 19.5596 40.6955 24.6108V35.1563H39.6816V24.6094C39.6816 19.6144 36.287 15.3225 31.4241 14.1694C31.2132 14.1188 31.0571 13.9402 31.0374 13.725C31.0163 13.5085 31.1373 13.3031 31.3355 13.2146C33.4674 12.2653 34.8441 10.1475 34.8441 7.82018C34.8441 4.5633 32.1948 1.91252 28.9379 1.91252C25.681 1.91252 23.0316 4.5619 23.0316 7.82018C23.0316 8.57393 23.1709 9.30518 23.4465 9.99705C25.7935 11.1066 27.4205 13.4958 27.4205 16.2577C27.4205 18.5639 26.2674 20.693 24.4027 21.9685C29.0841 23.6011 32.258 27.9971 32.258 33.0483L32.2566 43.5938Z"
											fill="#812C97"
										/>
									</svg>
								</div>
								{/* Heading */}
								<h3 class="font-days-one text-[#2a3273] text-[20px] mb-[5px]">
									The best possible service
								</h3>
							</header>
							{/* Content */}
							<p class="font-catamaran text-[18px] text-[#545454]">
								We will always act in the best interest of our clients,
								candidates and each other. We stand by our commitments, we keep
								our promises and treat everyone with respect.
							</p>
						</section>
					</div>
				</article>

				{/* Card 3 */}
				<article class="bg-[linear-gradient(30deg,_#72419B_0%,_#4970A2_100%)] w-full">
					<div class="p-[25px]">
						<section class="grid grid-flow-row content-start w-[90%]">
							<header>
								{/* Icon background */}
								<div
									class="w-[75px] h-[75px] grid items-center content-center justify-center justify-items-center rounded-full bg-white bg-opacity-[0.15] mb-[20px]"
									role="img"
									aria-label="Icon Background"
								>
									{/* Icon */}
									<svg
										width="41"
										height="44"
										viewBox="0 0 41 44"
										fill="none"
										role="img"
										aria-label="Icon"
									>
										<path
											d="M32.2562 43.5937H31.2437V33.0468C31.2437 28.0518 27.849 23.76 22.9862 22.6068C22.7752 22.5562 22.6191 22.3776 22.5994 22.1625C22.5783 21.9459 22.6993 21.7406 22.8976 21.652C25.0308 20.7028 26.4076 18.585 26.4076 16.2576C26.4076 13.0007 23.7582 10.35 20.5013 10.35C17.2444 10.35 14.5937 12.9993 14.5937 16.2576C14.5937 18.585 15.9718 20.7042 18.1037 21.652C18.3019 21.7406 18.4229 21.9459 18.4018 22.1625C18.3821 22.3776 18.226 22.5576 18.0151 22.6068C13.1522 23.76 9.75756 28.0518 9.75756 33.0468V43.5937H8.74365V33.0468C8.74365 27.9956 11.9176 23.5996 16.5976 21.967C14.7329 20.6915 13.5797 18.5625 13.5797 16.2562C13.5797 13.4943 15.2068 11.1037 17.5538 9.99559C17.8294 9.30512 17.9687 8.57387 17.9687 7.82012C17.9687 4.56324 15.3193 1.91246 12.0624 1.91246C8.80553 1.91246 6.15475 4.56184 6.15475 7.82012C6.15475 10.1489 7.53287 12.2667 9.66475 13.2145C9.86443 13.3031 9.98256 13.5084 9.96287 13.725C9.94318 13.9401 9.78709 14.1201 9.57615 14.1693C4.71334 15.3225 1.31865 19.6143 1.31865 24.6093V35.1562H0.306152V24.6093C0.306152 19.5581 3.48006 15.1621 8.16006 13.5295C6.29537 12.254 5.14365 10.125 5.14365 7.82012C5.14365 4.00496 8.24725 0.901367 12.0624 0.901367C15.8776 0.901367 18.9812 4.00496 18.9812 7.82012C18.9812 8.41355 18.908 8.99574 18.7604 9.55965C19.8727 9.27137 21.1271 9.27137 22.238 9.55965C22.0918 8.99574 22.0172 8.41355 22.0172 7.82012C22.0172 4.00496 25.1222 0.901367 28.9374 0.901367C32.7526 0.901367 35.8576 4.00496 35.8576 7.82012C35.8576 10.1264 34.7044 12.2554 32.8397 13.5309C37.5211 15.1636 40.6951 19.5595 40.6951 24.6107V35.1562H39.6812V24.6093C39.6812 19.6143 36.2865 15.3225 31.4237 14.1693C31.2127 14.1187 31.0566 13.9401 31.0369 13.725C31.0158 13.5084 31.1368 13.3031 31.3351 13.2145C33.4669 12.2653 34.8437 10.1475 34.8437 7.82012C34.8437 4.56324 32.1943 1.91246 28.9374 1.91246C25.6805 1.91246 23.0312 4.56184 23.0312 7.82012C23.0312 8.57387 23.1704 9.30512 23.446 9.99699C25.793 11.1065 27.4201 13.4957 27.4201 16.2576C27.4201 18.5639 26.2669 20.6929 24.4022 21.9684C29.0837 23.6011 32.2576 27.997 32.2576 33.0482L32.2562 43.5937Z"
											fill="white"
										/>
									</svg>
								</div>
								{/* Heading */}
								<h3 class="font-days-one text-white text-[20px] mb-[5px]">
									The best possible service
								</h3>
							</header>
							{/* Content */}
							<p class="font-catamaran text-[18px] text-white">
								We will always act in the best interest of our clients,
								candidates and each other. We stand by our commitments, we keep
								our promises and treat everyone with respect.
							</p>
						</section>
					</div>
				</article>
			</div>
		</>
	);
}

export default App;
