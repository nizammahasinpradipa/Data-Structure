let nilai = [
    [80,75, 90],
    [85, 90, 95],
    [70,80, 85],
    [90, 90, 100]
]

let siswa = ['Budi', 'Ani', 'Citra', 'Dipa']
let mapel = ['Matematika', 'Bahasa Indonesia', 'Bahasa Inggris']

for (let b = 0; b < nilai.length; b++) {
    let total = 0
    for (let k = 0; k < nilai[b].length; k++) {
        total = total + nilai[b][k];
    }

    let rata = total / nilai[b].length
    console.log('Rata-rata nilai ' + siswa[b] + ' adalah: ' + rata)
}

// Hasil : 
// Rata-rata nilai Budi adalah: 81.66666666666667
// Rata-rata nilai Ani adalah: 90
// Rata-rata nilai Citra adalah: 78.33333333333333

for (let x = 0; x < mapel.length; x++) {
    let mean = 0
    for (let y = 0; y < nilai.length; y++) {
        mean += nilai[y][x]
    }
    let rata = mean / nilai.length
    console.log('Rata-rata nilai mapel ' + mapel[x] + ' ' + ' adalah: ' + rata)
}

console.log(nilai[2][1]) // Mengambil Nilai Pada Array Kolom Ke 3 Dan Baris Ke 2


