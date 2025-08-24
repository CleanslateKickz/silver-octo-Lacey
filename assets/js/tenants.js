const tenantsData = [
    {
        name: "Lacey Liquor & Beverage",
        logo: "https://le-cdn.hibuwebsites.com/97c3c2d3a98b4171a2f4b514a3434c8d/dms3rep/multi/opt/logo-1920w.png",
        website: "https://www.laceyliquor.com/",
        description: "Lacey Liquor & Beverage has a wide selection of spirits, wine, and beer.",
        video: "https://raw.githubusercontent.com/CleanslateKickz/silver-octo-Lacey/main/Images/laceyliquor.mp4"
    },
    {
        name: "Kasita Krec's Mexican Restaurant & Bar",
        logo: "https://lh4.googleusercontent.com/j__Pqn1ZIobq2vmHMJ0YgYRsAMrSTFoPiZzvSbkpjunx8ARZqu_T1m3Ul03OZNLpCOoivgMMPOB6ZAVloVybhpHi7oA47j1dDMUXmvrydbA2pCBKwuBs82SDVgHqqhhwoZPIyRHtnw=w16383",
        website: "https://sites.google.com/view/kasitakrecs/inicio",
        description: "Authentic Mexican food in Lacey WA, house specialty, Mexican restaurant near Olympia, traditional flavors. At Kasita krec's, we bring the heart of Mexico to your table. Every dish is crafted with fresh ingredients, authentic flavors, and a touch of home. Whether you're here for our sizzling fajitas, crispy tacos, or traditional caldos, you'll taste the passion in every bite."
    },
    {
        name: "Sharp Design Hair Studio",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqqJlngxuRpNdFUPWTcc_CjFjLuarFmiLdF9KBtCeFvonjJyIbVyCVPjPVivOIF5uxyy0eCCIaHJqjIaJMjVfurZl0abiTdnWAxZyWeYIruWhIlF1aGosp5G534kQmLIfD958nqig=s406-k",
        website: "https://www.vagaro.com/sharpdesignhairstudio12",
        description: "We offer hair styling services including, haircuts for women and men, hair coloring from simple retouch, highlighting, balayage and more. Brazilian blowouts, daily and formal hair styling are also offered. We also have facial waxing."
    },
    {
        name: "Canna Cabana Subs & Shakes",
        logo: "https://450d5bfb5ab149b300c2.cdn6.editmysite.com/uploads/b/450d5bfb5ab149b300c20999b282176f7307f66f583e3434ce2bba6d523ffbff/Canna%20Cabana%20Logo_1691626133.png?width=2400&optimize=medium",
        website: "https://cannacabanasubsshakes.square.site/",
        description: "Catering to your munchie needs since 2015. Canna Cabana Sub and Shakes is a Cannabis themed restaurant, but don't worry you'll only be high off the flavor ;) Our goal is to serve subs and shakes with the highest quality. Our bread is baked fresh daily by one of our local bakeries, the meats and cheese are sliced in house, and all our munchies are made by hand in shop! Don't sleep on our milkshakes, we were voted top 10 best in Washington. We use real ingredients and hand scooped ice-cream to make your mouth water every time."
    },
    {
        name: "Emerald City / Pizza Hut",
        logo: "https://locations.pizzahut.com/assets/static/logo-aiG12Vj0.svg",
        website: "https://locations.pizzahut.com/wa/lacey/4660-whitman-lane-se",
        description: "Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney."
    },
    {
        name: "Star Nails & Spa",
        image: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/300971201_946268596284691_5647330539824643524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-kS6Dej73IMQ7kNvwF-PTsw&_nc_oc=Adm_PKO8u_CY0Ynh4Gl52vwsvEJ1bJF-GYDXMzB1qlxIXqV0JPjssDsJFj57ZaVxbeo&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=VCIxKntk6B1BhahMKtFLCA&oh=00_AfVu2JHGb-yiGfj3iVP0Lsu-T70SXRl32WGpKExTzshZOg&oe=68AE8FAE",
        website: "",
        description: "A local nail salon offering a variety of services."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const tenantsGrid = document.getElementById('tenants-grid');
    if (tenantsGrid) {
        tenantsData.forEach(tenant => {
            const tenantCard = document.createElement('div');
            tenantCard.className = 'tenant-card';

            let mediaElement = '';
            if (tenant.video) {
                mediaElement = `<video src="${tenant.video}" controls muted loop playsinline class="tenant-video"></video>`;
            } else if (tenant.logo) {
                mediaElement = `<img src="${tenant.logo}" alt="${tenant.name} Logo" class="tenant-logo">`;
            } else if (tenant.image) {
                mediaElement = `<img src="${tenant.image}" alt="${tenant.name}" class="tenant-image">`;
            }

            tenantCard.innerHTML = `
                <div class="tenant-card-media">
                    ${mediaElement}
                </div>
                <div class="tenant-card-content">
                    <h3 class="tenant-card-name">${tenant.name}</h3>
                    <p class="tenant-card-description">${tenant.description}</p>
                    ${tenant.website ? `<a href="${tenant.website}" target="_blank" class="tenant-card-website">Visit Website <i class="fas fa-external-link-alt"></i></a>` : ''}
                </div>
            `;
            tenantsGrid.appendChild(tenantCard);
        });
    }
});
