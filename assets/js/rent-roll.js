document.addEventListener('DOMContentLoaded', function() {
    // Initialize Rent Roll Table
    const rentRollData = [
        { suite: 'A', tenant: 'Lacey Liquor & Beverage', sf: '2,980', baseRent: '$5,072', annualRent: '$60,864', rentPerSf: '$20.43', leaseFrom: '05/22', leaseTo: '04/27', leaseType: 'NNN', options: 'None' },
        { suite: 'C', tenant: 'Kasita Krees', sf: '2,972', baseRent: '$4,458', annualRent: '$53,496', rentPerSf: '$18.00', leaseFrom: '01/25', leaseTo: '12/29', leaseType: 'NNN', options: 'One (1) Five (5) Year' },
        { suite: 'D', tenant: 'Sharp Design Hair Studio', sf: '1,311', baseRent: '$1,647', annualRent: '$19,764', rentPerSf: '$15.08', leaseFrom: '09/24', leaseTo: '08/27', leaseType: 'NNN', options: 'Two (2) Three (3) Year' },
        { suite: 'E', tenant: 'Canna Cabana S&S', sf: '1,164', baseRent: '$1,543', annualRent: '$18,523', rentPerSf: '$15.91', leaseFrom: '07/23', leaseTo: '06/28', leaseType: 'NNN', options: 'One (1) Five (5) Year' },
        { suite: 'F', tenant: 'Pizza Hut', sf: '1,311', baseRent: '$1,991', annualRent: '$23,892', rentPerSf: '$18.23', leaseFrom: '01/23', leaseTo: '12/28', leaseType: 'NNN', options: 'One (1) Five (5) Year' },
        { suite: 'G', tenant: 'Star Nails & Spa', sf: '1,586', baseRent: '$2,473', annualRent: '$29,676', rentPerSf: '$18.71', leaseFrom: '07/25', leaseTo: '06/30', leaseType: 'NNN', options: 'One (1) Five (5) Year' }
    ];

    const tableContainer = document.querySelector('.table-container');
    if (tableContainer) {
    let tableHTML = `
    <table class="rent-table">
        <thead>
            <tr>
                <th>Suite</th>
                <th>Tenant</th>
                <th>SF</th>
                <th>Base Rent</th>
                <th>Annual Rent</th>
                <th>Rent/SF</th>
                <th>Lease From</th>
                <th>Lease To</th>
                <th>Lease Type</th>
            </tr>
        </thead>
        <tbody>
            `;

            rentRollData.forEach((row, index) => {
            const hasOptions = row.options && row.options.toLowerCase() !== 'none';
            tableHTML += `
            <tr class="tenant-row ${hasOptions ? 'has-options' : ''}" ${hasOptions ? `data-toggle-id="options-${index}"` : ''}>
                <td>${row.suite}</td>
                <td class="tenant-name">${row.tenant}</td>
                <td>${row.sf}</td>
                <td>${row.baseRent}</td>
                <td>${row.annualRent}</td>
                <td>${row.rentPerSf}</td>
                <td>${row.leaseFrom}</td>
                <td>${row.leaseTo}</td>
                <td>${row.leaseType}</td>
            </tr>
            `;

            if (hasOptions) {
            tableHTML += `
            <tr class="options-row" id="options-${index}">
                <td colspan="9">
                    <div class="options-content">
                        <strong>Options:</strong> ${row.options}
                    </div>
                </td>
            </tr>
            `;
            }
            });

            tableHTML += '</tbody></table>';
    tableContainer.innerHTML = tableHTML;

    // Add click handlers for expandable rows
    const toggleRows = tableContainer.querySelectorAll('.tenant-row.has-options');
    toggleRows.forEach(row => {
    row.addEventListener('click', function() {
    const optionsRow = tableContainer.querySelector(`#${this.dataset.toggleId}`);
    if (optionsRow) {
    this.classList.toggle('active');
    optionsRow.classList.toggle('active');
    }
    });
    });
    }
});
