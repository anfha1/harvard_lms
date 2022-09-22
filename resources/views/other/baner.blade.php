

    <div style="height:100%;width:100%; background-color:#fdc11c;">
        <img id="icon-close" onclick="Common.BannerAdvertisement.CloseBanner()" src="/Content/images/AVS/icon-close.png" />
        <div id="logo-ads">
            <img src="/Content/images/AVS/logoDtpA.png" style="width: 104%; height: auto; margin-top: -2px;" />
                <img class="text-version" src="/Content/images/AVS/image-textVersion.png" />

            <div class="box-textAds">
                <span class="txt-avs">Đừng bỏ lỡ</span>
            </div>
            <div class="content-itemavs" style="width: 100%; display: flex; flex-direction: column; height: 100%; align-items: center; justify-content: flex-start;">
            </div>



        </div>
        <div style="position: absolute; bottom: 3%; width: 100%; display: flex; align-items: center; justify-content: center; z-index: 2;">
            <div id="countdown">
                <div id="countdown-number"></div><span id="txt-countdown-number">s</span>
                <svg>
                    <circle r="18" cx="20" cy="20"></circle>
                </svg>
            </div>
        </div>
        <img class="patten-ads" src="/Content/images/AVS/patten1.png" style="width:100%;height:auto;" />
    </div>
<script>
    var hasBanner = "0";
    var countdownOrgin = '0';
    var countdown = '0';
    var intervalCountDown;
    BannerAdvertisement.Url = {};
    BannerAdvertisement.Url.RedirectToAppContent = '/BookDetail/RedirectToAppContent';
</script>
