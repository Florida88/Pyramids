export type Pyramid = {
  name: string
  pharaoh: string
  dynasty: string
  location: string
  photo: string
}

export type PyramidResponse = {
  data: Pyramid[],
  hasMore: boolean,
  page: number,
}

const pyramidData: Pyramid[] = [
  { dynasty: '18th', pharaoh: 'Ahmose I', name: 'Pyramid of Ahmose', location: 'Abydos', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '12th', pharaoh: 'Amenemhat I', name: 'Pyramid of Amenemhet I', location: 'Lisht', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '12th', pharaoh: 'Amenemhat II', name: 'White Pyramid', location: 'Dahshur', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '12th', pharaoh: 'Amenemhat III', name: 'Pyramid of Amenemhat III', location: 'Dahshur', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '12th', pharaoh: 'Amenemhat III', name: 'Pyramid of Hawara', location: 'Hawara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '13th', pharaoh: 'Ameny Qemau', name: 'Pyramid of Ameny Qemau', location: 'South Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '13th', pharaoh: 'Ameny Qemau', name: 'n.d.', location: 'Dahshur', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '4th', pharaoh: 'Bikheris?', name: "Northern Pyramid of Zawyet el'Aryan", location: "Zawyet el'Aryan", photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '4th', pharaoh: 'Djedefre', name: 'Pyramid of Djedefre', location: 'Abu Rawash', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '5th', pharaoh: 'Djedkare Isesi', name: 'Pyramid of Djedkare-Isesi', location: 'South Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '3rd', pharaoh: 'Djoser', name: 'Pyramid of Djoser', location: 'Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '3rd', pharaoh: 'Khaba', name: 'Layer Pyramid', location: "Zawyet el'Aryan", photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '4th', pharaoh: 'Khafre', name: 'Pyramid of Khafre', location: 'Giza', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '13th', pharaoh: 'Khendjer', name: 'Pyramid of Khendjer', location: 'South Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '4th', pharaoh: 'Khufu', name: 'The Great Pyramid of Giza', location: 'Giza', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: 'First Intermediate Period', pharaoh: 'Khui', name: 'Pyramid of Khui', location: 'Dara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '13th', pharaoh: 'Likely Neferhotep I', name: 'Tomb S9', location: 'Abydos', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '13th', pharaoh: 'Likely Sobekhotep IV', name: 'Tomb S10', location: 'Abydos', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '5th', pharaoh: 'Menkauhor Kaiu[13]', name: 'Headless Pyramid', location: 'Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '4th', pharaoh: 'Menkaure', name: 'Pyramid of Menkaure', location: 'Giza', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '6th', pharaoh: 'Merenre', name: 'Pyramid of Merenre', location: 'South Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '10th', pharaoh: 'Merikare', name: 'Pyramid of Merikare', location: 'Unknown', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '5th', pharaoh: 'Neferefre', name: 'Pyramid of Neferefre', location: 'Abusir', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '5th', pharaoh: 'Neferirkare Kakai', name: 'Pyramid of Neferirkare', location: 'Abusir', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '5th', pharaoh: 'Nyuserre Ini', name: 'Pyramid of Nyuserre', location: 'Abusir', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '6th', pharaoh: 'Pepi I', name: 'Pyramid of Pepi I', location: 'South Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '6th', pharaoh: 'Pepi II', name: 'Pyramid of Pepi II', location: 'South Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '8th', pharaoh: 'Qakare Ibi', name: 'Pyramid of Ibi', location: 'South Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '5th', pharaoh: 'Sahure', name: 'Pyramid of Sahure', location: 'Abusir', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '3rd', pharaoh: 'Sekhemkhet', name: 'Buried Pyramid', location: 'Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '12th', pharaoh: 'Senusret I', name: 'Pyramid of Senusret I', location: 'Lisht', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '12th', pharaoh: 'Senusret II', name: 'Pyramid of Senusret II', location: 'El-Lahun', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '12th', pharaoh: 'Senusret III', name: 'Pyramid of Senusret III', location: 'Dahshur', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '5th', pharaoh: 'Shepseskare', name: 'Unfinished pyramid of North Abusir', location: 'Abusir', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '4th', pharaoh: 'Sneferu', name: 'Pyramid of Meidum', location: 'Meidum', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '4th', pharaoh: 'Sneferu', name: 'Bent Pyramid', location: 'Dahshur', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '4th', pharaoh: 'Sneferu', name: 'Red Pyramid', location: 'Dahshur', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '6th', pharaoh: 'Teti', name: 'Pyramid of Teti', location: 'North Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '5th', pharaoh: 'Unas', name: 'Pyramid of Unas', location: 'North Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '13th', pharaoh: 'unknown', name: 'Southern South Saqqara pyramid', location: 'South Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
  { dynasty: '5th', pharaoh: 'Userkaf', name: 'Pyramid of Userkaf', location: 'Saqqara', photo: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
]

export function getPyramids(page: number, limit: number, search: string): Promise<PyramidResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pyramids = pyramidData.filter(pyramid => {
        return Object.values(pyramid).some(value => {
          return value.toLowerCase().includes(search.toLowerCase())
        });
      })
      const resp = pyramids.slice((page - 1) * limit, page * limit);
      resolve({
        data: resp,
        hasMore: page * limit < pyramids.length,
        page
      })
    }, 200)
  })
}
