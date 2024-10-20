function calculateNeeds() {
    const makanan = document.getElementById('makanan').value;
    const tempatTinggal = document.getElementById('tempat-tinggal').value;
    const pendidikan = document.getElementById('pendidikan').value;
    const kesehatan = document.getElementById('kesehatan').value;

    const total = parseFloat(makanan) + parseFloat(tempatTinggal) + parseFloat(pendidikan) + parseFloat(kesehatan);

    document.getElementById('result').innerText = "Estimasi biaya kebutuhan hidup dasar per bulan adalah";Rp ${total.toLocaleString('id-ID')};
}