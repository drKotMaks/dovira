
//тут всі види запросів на отримання результатів, які повинні ...
//передваватися до файлу який повинент запрашувати ці дані 

  export const getServicesData = `
    query Services {
          servicEss {
          titleServicEs
          id
          decriptionServicEs
          slug
          updatedAt
          rating
          serviceAction
          pricE {
            titlE
              }
            }
          }`


  export const getServicesTitle = `
    query Services {
          servicEss {
          titleServicEs
          }
      }`

  export const getDoctorsQuery = `
      query getDoctors {
        doctoRs {
          lastName
          slugDoctor
          majorSpecialy
          nameDoctor
          imageDoctor {
            url
          }
        }
      }`  



    export const getPricesAll = `
      query getPrices {
        pricEs {
          titlE
          oldCost
          costNew
          costSpetial
          actionPrice
          id
        }
      }`


      export const getAllInfoServices = (params) => { 
        return `query getCategory {
  servicEss(where: {slug: "${params}"}) {
    slug
    updatedAt
    titleServicEs
    rating
    stage
    pricE {
      titlE
      id
      actionPrice
      costNew
      oldCost
    }
    id
    decriptionServicEs
    doctord_ {
      ... on DoctoR {
        id
        slugDoctor
        lastName
        nameDoctor
        majorSpecialy
        imageDoctor {
          url
        }
      }
    }
    imageServices {
      url
    }
    multiImageServices {
      url
    }
    fullDescription {
      html
    }
  }
} `;
      }
      


      export const getAllInfoDoctor = (params) => { 
        return `
          query getDoctor {
  doctoRs(where: {slugDoctor: "${params}"}) {
    id
    imageDoctor {
      url
    }
    lastName
    nameDoctor
    review
    slugDoctor
    location {
      latitude
      longitude
    }
    description
    pricEsDoc {
      costNew
      actionPrice
      costSpetial
      oldCost
      titlE
      id
    }
    fullText {
      html
    }
    socialUrlFacebook
    socialUrlInstagram
    socialUrlTelegram
    majorSpecialy
    updatedAt
    vacationEnd
    vacationStart
  }
}`;
      }


export const getPriceForCategory = (params) => { 
        return `query getPriceForCategory {
  servicEs(where: {slug: "${params}"}) {
    id
  }
  pricEs {
    actionPrice
    costNew
    id
    titlE
  }
}`;
      }
      
      


