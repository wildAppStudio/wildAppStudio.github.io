<script>
    import Footer from "../../components/footer.svelte";
    import Gnb from "../../components/gnb.svelte";
</script>

<Gnb />

<div class="container-basic">
    <div class="grid grid-cols-1 sm:grid-cols-4 mt-16">
        <h2 class="text-20-bold mb-6">공방소개</h2>
        <div class="sm:col-span-3 col-span-1 pb-14 border-b divider-main-color">
            <h3 class="text-20-bold mb-4">공방의 목적</h3>
            <p class="text-16">뭔가 아이디어가 있지만 구현 비용의 문제 때문에 또는 망할것 같은 느낌이 들거나 구성원 간의 이해관계, 어른의 사정 등으로 구현할 수 없는 서비스들을 가상으로 구현해보려고 만듬</p>
        </div>

        <h2 class="text-20-bold mb-6 mt-14">주인장 스탯</h2>
        <div class="sm:col-span-3 col-span-1 py-14 border-b divider-main-color">
            <div class="pb-7 border-b divider-sub-color">
                <div class="flex justify-start gap-x-2 items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-neutral-900 dark:stroke-neutral-200">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                      </svg>
                      <h3 class="text-18-bold">기획</h3>
                </div>
                <p class="text-16">고인물이 만든거 보고 감탄하면서 나도 만들어봐야지 해서 만드는 수준</p>
            </div>
            
            <div class="py-7 border-b divider-sub-color">
                <div class="flex justify-start gap-x-2 items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-neutral-900 dark:stroke-neutral-200">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                      </svg>
                      
                      <h3 class="text-18-bold">디자인</h3>
                </div>
                <p class="text-16">삼각형, 사각형, 원만 잘 그림. 그 외에는 묻지 마셈</p>
            </div>

            <div class="pt-7">
                <div class="flex justify-start gap-x-2 items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-neutral-900 dark:stroke-neutral-200">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                      </svg>
                      
                      
                      <h3 class="text-18-bold">개발</h3>
                </div>
                <p class="text-16">Hello, World!는 잘 만듬. 다른건 묻지 마셈</p>
            </div>
        </div>

        <h2 class="text-20-bold mb-6 mt-14">뭔가 연락하거나 보기</h2>
        <div class="sm:col-span-3 col-span-1 py-14">
            <div class="flex justify-start items-center gap-x-5">
                <a class="flex justify-center bg-neutral-200 dark:bg-neutral-800 w-10 h-10 place-items-center rounded-full" href="mailto:wildappstudio@gmail.com">
                    <svg class="stroke-neutral-600 dark:stroke-neutral-400 hover:stroke-neutral-900 hover:dark:stroke-neutral-50" width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1458 2.625V11.375C20.1458 11.8723 19.9154 12.3492 19.5051 12.7008C19.0949 13.0525 18.5385 13.25 17.9583 13.25H3.375C2.79484 13.25 2.23844 13.0525 1.8282 12.7008C1.41797 12.3492 1.1875 11.8723 1.1875 11.375V2.625M20.1458 2.625C20.1458 2.12772 19.9154 1.65081 19.5051 1.29917C19.0949 0.947544 18.5385 0.75 17.9583 0.75H3.375C2.79484 0.75 2.23844 0.947544 1.8282 1.29917C1.41797 1.65081 1.1875 2.12772 1.1875 2.625M20.1458 2.625V2.8275C20.1459 3.14762 20.0503 3.46242 19.8682 3.74191C19.6861 4.0214 19.4236 4.25628 19.1056 4.42417L11.8139 8.27C11.469 8.45211 11.0718 8.54854 10.6667 8.54854C10.2615 8.54854 9.86438 8.45211 9.51944 8.27L2.22778 4.425C1.90978 4.25711 1.64723 4.02224 1.46514 3.74275C1.28304 3.46325 1.18746 3.14845 1.1875 2.82833V2.625" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                
                <a class="flex justify-center bg-neutral-200 dark:bg-neutral-800 w-10 h-10 place-items-center rounded-full" href="https://www.youtube.com/@wildAppStudio" target='_blank'>
                    <svg class="fill-neutral-600 dark:fill-neutral-400 hover:fill-neutral-900 hover:dark:fill-neutral-50" width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0637 0.498779H10.175C11.2025 0.502529 16.4087 0.54003 17.8125 0.917529C18.2369 1.03274 18.6236 1.25731 18.9339 1.56879C19.2443 1.88027 19.4675 2.26776 19.5812 2.69253C19.7075 3.16753 19.7963 3.79628 19.8563 4.44503L19.8688 4.57503L19.8962 4.90003L19.9063 5.03003C19.9875 6.17253 19.9975 7.24253 19.9987 7.47628V7.57003C19.9975 7.81253 19.9862 8.95503 19.8962 10.145L19.8863 10.2763L19.875 10.4063C19.8125 11.1213 19.72 11.8313 19.5812 12.3538C19.4679 12.7787 19.2448 13.1664 18.9344 13.4779C18.6239 13.7895 18.237 14.0139 17.8125 14.1288C16.3625 14.5188 10.8512 14.5463 10.0875 14.5475H9.91C9.52375 14.5475 7.92625 14.54 6.25125 14.4825L6.03875 14.475L5.93 14.47L5.71625 14.4613L5.5025 14.4525C4.115 14.3913 2.79375 14.2925 2.185 14.1275C1.76061 14.0128 1.37383 13.7885 1.06341 13.4772C0.752979 13.1659 0.529809 12.7785 0.41625 12.3538C0.2775 11.8325 0.185 11.1213 0.1225 10.4063L0.1125 10.275L0.1025 10.145C0.0408095 9.29803 0.00662483 8.44925 0 7.60003L0 7.44628C0.0025 7.17753 0.0125 6.24878 0.08 5.22378L0.08875 5.09503L0.0925 5.03003L0.1025 4.90003L0.13 4.57503L0.1425 4.44503C0.2025 3.79628 0.29125 3.16628 0.4175 2.69253C0.530867 2.26759 0.753953 1.87992 1.06439 1.56838C1.37483 1.25685 1.76171 1.03239 2.18625 0.917529C2.795 0.755029 4.11625 0.655029 5.50375 0.592529L5.71625 0.583779L5.93125 0.576279L6.03875 0.572529L6.2525 0.56378C7.44213 0.525498 8.63226 0.504245 9.8225 0.500029H10.0637V0.498779ZM8 4.51128V10.5338L13.1963 7.52378L8 4.51128Z" />
                    </svg>
                </a>
            </div>
        </div>
        
    </div>
</div>

<Footer />