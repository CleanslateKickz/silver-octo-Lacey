document.addEventListener('DOMContentLoaded', function() {
    const rentRollData = [
        {
            tenant: 'Lacey Liquor & Beverage',
            sf: '2,980',
            leaseFrom: '5/1/22',
            leaseTo: '4/30/27',
            leaseType: 'NNN',
            annualRent: '$60,873',
            options: 'None',
            logo: "https://le-cdn.hibuwebsites.com/97c3c2d3a98b4171a2f4b514a3434c8d/dms3rep/multi/opt/logo-1920w.png",
            website: "https://www.laceyliquor.com/",
            description: "Lacey Liquor & Beverage has a wide selection of spirits, wine, and beer.",
            video: "https://raw.githubusercontent.com/CleanslateKickz/silver-octo-Lacey/main/Images/laceyliquor.mp4"
        },
        {
            tenant: 'Kasita Krees',
            sf: '2,972',
            leaseFrom: '1/1/25',
            leaseTo: '12/31/29',
            leaseType: 'NNN',
            annualRent: '$53,496',
            options: 'One (1) Five (5) Year',
            logo: "https://cleanslatekickz.github.io/geojson/Images/Kasita%20Krec's.jpg",
            website: "https://sites.google.com/view/kasitakrecs/inicio",
            description: "Authentic Mexican food in Lacey WA, house specialty, Mexican restaurant near Olympia, traditional flavors. At Kasita krec's, we bring the heart of Mexico to your table. Every dish is crafted with fresh ingredients, authentic flavors, and a touch of home. Whether you're here for our sizzling fajitas, crispy tacos, or traditional caldos, you'll taste the passion in every bite."
        },
        {
            tenant: 'Sharp Design Hair Studio',
            sf: '1,311',
            leaseFrom: '9/1/24',
            leaseTo: '8/31/27',
            leaseType: 'NNN',
            annualRent: '$19,764',
            options: 'Two (2) Three (3) Year',
            image: "https://cleanslatekickz.github.io/geojson/Images/Sharp%20Design%20Hair%20Studio%20(1).jpg",
            website: "https://www.vagaro.com/sharpdesignhairstudio12",
            description: "We offer hair styling services including, haircuts for women and men, hair coloring from simple retouch, highlighting, balayage and more. Brazilian blowouts, daily and formal hair styling are also offered. We also have facial waxing."
        },
        {
            tenant: 'Canna Cabana S&S',
            sf: '1,164',
            leaseFrom: '7/1/23',
            leaseTo: '6/30/28',
            leaseType: 'NNN',
            annualRent: '$18,516',
            options: 'One (1) Five (5) Year',
            logo: "https://450d5bfb5ab149b300c2.cdn6.editmysite.com/uploads/b/450d5bfb5ab149b300c20999b282176f7307f66f583e3434ce2bba6d523ffbff/Canna%20Cabana%20Logo_1691626133.png?width=2400&optimize=medium",
            website: "https://cannacabanasubsshakes.square.site/",
            description: "Catering to your munchie needs since 2015. Canna Cabana Sub and Shakes is a Cannabis themed restaurant, but don't worry you'll only be high off the flavor ;) Our goal is to serve subs and shakes with the highest quality. Our bread is baked fresh daily by one of our local bakeries, the meats and cheese are sliced in house, and all our munchies are made by hand in shop! Don't sleep on our milkshakes, we were voted top 10 best in Washington. We use real ingredients and hand scooped ice-cream to make your mouth water every time."
        },
        {
            tenant: 'Pizza Hut',
            sf: '1,311',
            leaseFrom: '1/1/23',
            leaseTo: '12/31/28',
            leaseType: 'NNN',
            annualRent: '$23,892',
            options: 'One (1) Five (5) Year',
            logo: "https://locations.pizzahut.com/assets/static/logo-aiG12Vj0.svg",
            website: "https://locations.pizzahut.com/wa/lacey/4660-whitman-lane-se",
            description: "Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney."
        },
        {
            tenant: 'Star Nails & Spa',
            sf: '1,586',
            leaseFrom: '7/1/25',
            leaseTo: '6/30/30',
            leaseType: 'NNN',
            annualRent: '$29,676',
            options: 'One (1) Five (5) Year',
            image: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/300971201_946268596284691_5647330539824643524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-kS6Dej73IMQ7kNvwF-PTsw&_nc_oc=Adm_PKO8u_CY0Ynh4Gl52vwsvEJ1bJF-GYDXMzB1qlxIXqV0JPjssDsJFj57ZaVxbeo&_nc_zt=23&_nc_ht=scontent-sea1-1.xx&_nc_gid=VCIxKntk6B1BhahMKtFLCA&oh=00_AfVu2JHGb-yiGfj3iVP0Lsu-T70SXRl32WGpKExTzshZOg&oe=68AE8FAE",
            website: "",
            description: "A local nail salon offering a variety of services."
        },
        {
            tenant: 'T-Mobile Tower',
            sf: '-',
            leaseFrom: '12/6/99',
            leaseTo: '12/6/29',
            leaseType: 'NNN',
            annualRent: '$16,104',
            options: 'None',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/T-Mobile_US_Logo_2022_RGB_Magenta_on_Transparent.svg/2560px-T-Mobile_US_Logo_2022_RGB_Magenta_on_Transparent.svg.png',
            image: 'https://www.t-mobile.com/dialed-in/_admin/uploads/2023/08/compressed-cell-phone-tower-min-1280x640.png',
            website: 'https://www.t-mobile.com/',
            description: 'T-Mobile US, Inc. is an American wireless network operator headquartered in Bellevue, Washington. Its majority shareholder and namesake is the German telecommunications company Deutsche Telekom. T-Mobile is the second largest wireless carrier in the United States, with 132.8 million subscribers as of June 30, 2025.'
        }
    ];

    const tableContainer = document.querySelector('.table-container');
    const sidebar = document.getElementById('tenant-sidebar');
    const sidebarTenantName = document.getElementById('sidebar-tenant-name');
    const sidebarTenantBody = document.getElementById('sidebar-tenant-body');
    const sidebarClose = document.getElementById('sidebar-close');

    if (tableContainer) {
        let tableHTML = `
        <table class="rent-table">
            <thead>
                <tr>
                    <th>Logo</th>
                    <th>Tenant</th>
                    <th>Start</th>
                    <th>Expiration</th>
                    <th>Type</th>
                    <th>Annual Rent</th>
                </tr>
            </thead>
            <tbody>
        `;

        rentRollData.forEach((tenant, index) => {
            let logoHtml = tenant.logo ? `<img src="${tenant.logo}" alt="${tenant.tenant} Logo" class="tenant-logo-in-table">` : (tenant.image ? `<img src="${tenant.image}" alt="${tenant.tenant}" class="tenant-logo-in-table">` : '');
            const hasOptions = tenant.options && tenant.options.toLowerCase() !== 'none';
            tableHTML += `
                <tr class="tenant-row ${hasOptions ? 'has-options' : ''}" ${hasOptions ? `data-toggle-id="options-${index}"` : ''}>
                    <td>${logoHtml}</td>
                    <td><a href="#" class="tenant-name-link" data-index="${index}">${tenant.tenant}</a></td>
                    <td>${tenant.leaseFrom}</td>
                    <td>${tenant.leaseTo}</td>
                    <td>${tenant.leaseType}</td>
                    <td>${tenant.annualRent}</td>
                </tr>
            `;
            if (hasOptions) {
                tableHTML += `
                <tr class="options-row" id="options-${index}">
                    <td colspan="6">
                        <div class="options-content">
                            <strong>Options:</strong> ${tenant.options}
                        </div>
                    </td>
                </tr>
                `;
            }
        });

        tableHTML += '</tbody></table>';
        tableContainer.innerHTML = tableHTML;

        const tenantNameLinks = document.querySelectorAll('.tenant-name-link');
        tenantNameLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const tenantIndex = this.dataset.index;
                const tenant = rentRollData[tenantIndex];

                sidebarTenantName.textContent = tenant.tenant;

                let mediaHtml = '';
                if (tenant.video) {
                    mediaHtml = `<div class="tenant-media"><video src="${tenant.video}" controls muted loop playsinline autoplay></video></div>`;
                } else if (tenant.image) {
                    mediaHtml = `<div class="tenant-media"><img src="${tenant.image}" alt="${tenant.tenant}"></div>`;
                } else if (tenant.logo) {
                    mediaHtml = `<div class="tenant-media"><img src="${tenant.logo}" alt="${tenant.tenant} Logo"></div>`;
                }

                let websiteHtml = tenant.website ? `<a href="${tenant.website}" target="_blank" class="tenant-website-link">Visit Website <i class="fas fa-external-link-alt"></i></a>` : '';

                let sidebarBodyContent = `
                    ${mediaHtml}
                    <p class="tenant-description">${tenant.description}</p>
                    ${websiteHtml}
                `;

                sidebarTenantBody.innerHTML = sidebarBodyContent;
                sidebar.classList.add('visible');
            });
        });

        if (sidebarClose) {
            sidebarClose.addEventListener('click', () => {
                sidebar.classList.remove('visible');
            });
        }

        if (sidebar) {
            sidebar.addEventListener('click', (e) => {
                if (e.target === sidebar) {
                    sidebar.classList.remove('visible');
                }
            });
        }

        // Add click handlers for expandable rows
        const toggleRows = tableContainer.querySelectorAll('.tenant-row.has-options');
        toggleRows.forEach(row => {
            row.addEventListener('click', function(e) {
                // Prevent sidebar from opening if the click is not on the tenant name link
                if (e.target.classList.contains('tenant-name-link')) {
                    return;
                }
                const optionsRowId = this.dataset.toggleId;
                if (optionsRowId) {
                    const optionsRow = document.getElementById(optionsRowId);
                    if (optionsRow) {
                        this.classList.toggle('active');
                        optionsRow.classList.toggle('active');
                    }
                }
            });
        });
    }
});
