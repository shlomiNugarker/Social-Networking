import { utilService } from './utilService.js'
import { storageService } from './asyncStorageService.js'

export const postService = {
  query,
  getPostsLength,
}

const STORAGE_KEY = 'posts'

_createPosts()

function query(filterBy = null) {
  return storageService.query(STORAGE_KEY, filterBy)
}
function getPostsLength() {
  const posts = storageService.query(STORAGE_KEY)
  console.log(posts)
}

function _createPosts() {
  let posts = utilService.loadFromStorage(STORAGE_KEY)
  if (!posts || !posts.length) {
    posts = [
      {
        id: '6318751da037be08c3b94046',
        userId: '6282267febfcb07f771359c7',
        username: 'craftyfun',
        avatar:
          'https://images.tedooo.com/biz/6282267febfcb07f771359c7/5173eadb-0c97-4850-8892-9df4c442c238.jpg',
        shopName: 'Crafts ideas',
        shopId: '628227cdebfcb07f771359ce',
        images: [
          'https://images.tedooo.com/biz/6282267febfcb07f771359c7/d2b86a82-a665-4759-b832-d48f292e2c0b.jpg',
        ],
        comments: 263,
        date: '2022-09-06T14:40:29.347Z',
        text: 'Upload the last 3 pictures of handmade items you\u2019ve made or bought!',
        likes: 2142,
        didLike: true,
        premium: true,
      },
      {
        id: '6317155754c28a17ace8f82c',
        userId: '62e984eca4ff286b57699578',
        username: 'melissabel',
        avatar:
          'https://images.tedooo.com/biz/62e984eca4ff286b57699578/01fda2c9-85c8-44f8-a1c7-f20a628c9dfb.jpg',
        images: [
          'https://images.tedooo.com/biz/62e984eca4ff286b57699578/6dbc294b-4959-44f3-aca0-ba82799e28ab.jpg',
        ],
        comments: 11,
        date: '2022-09-06T09:39:35.727Z',
        text: 'Hagámoslo el post más largo de "Hecho A Mano". Publica cualquier manualidad que hayas hecho,\n            Vamos!\n        ',
        likes: 112,
        didLike: false,
        premium: false,
      },
      {
        id: '6319f52ed519ba15e06d72a7',
        userId: '631762c2a2967db5fdc89596',
        username: 'vintage57',
        avatar:
          'https://images.tedooo.com/biz/631762c2a2967db5fdc89596/e7fa1bd9-adb8-4ba5-bf2b-80e8909ed4ed.jpg',
        shopName: 'Vintage 57',
        shopId: '6317638ba2967db5fdc895a4',
        images: [
          'https://images.tedooo.com/biz/631762c2a2967db5fdc89596/60e88bbd-1a16-46df-861d-99dbf3076230.jpg',
          'https://images.tedooo.com/biz/631762c2a2967db5fdc89596/be5ea7dc-69cc-451e-b641-be09e6d0c3cd.jpg',
          'https://images.tedooo.com/biz/631762c2a2967db5fdc89596/760233af-57dd-400c-8942-213461d9cea4.jpg',
        ],
        comments: 0,
        date: '2022-09-08T13:59:10.012Z',
        text: 'some new teal & black glitter Halloweenies',
        likes: 102,
        didLike: true,
        premium: false,
      },
      {
        id: '6319ec1a6b1b2acc7df75e15',
        userId: '6254e599f625234b67ec881f',
        username: 'zenmalas',
        avatar:
          'https://images.tedooo.com/6254e599f625234b67ec881f/945dea80-1002-4e24-af6b-7a276cf6de07.jpg',
        shopName: 'Shop number',
        shopId: '6254e7f35596798fd53199fd',
        images: [
          'https://images.tedooo.com/biz/6254e599f625234b67ec881f/a5797c4c-cc1e-4387-9107-dec8a8af7638.jpg',
        ],
        comments: 0,
        date: '2022-09-08T13:20:26.478Z',
        text: '',
        likes: 945,
        didLike: true,
        premium: false,
      },
      {
        id: '6319eb6cd519ba15e06d7290',
        userId: '6318e42f1e092fadca580648',
        username: 'bmkapparel',
        avatar:
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/d1d767f5-8956-4ad4-9ed8-30ee923bc6b2.jpg',
        shopName: 'BMK Apparel & More',
        shopId: '6318e5d4e475b6486f6e7524',
        images: [
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/5e4a4b77-fcb3-4b3f-978a-bacdd778daa4.jpg',
        ],
        comments: 0,
        date: '2022-09-08T13:17:32.762Z',
        text: '95% polyester, soft feel, unisex sizing',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319eacd6b1b2acc7df75e08',
        userId: '6318e42f1e092fadca580648',
        username: 'bmkapparel',
        avatar:
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/d1d767f5-8956-4ad4-9ed8-30ee923bc6b2.jpg',
        shopName: 'BMK Apparel & More',
        shopId: '6318e5d4e475b6486f6e7524',
        images: [
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/2f10fbf3-1202-438c-8ab1-835594f212a4.jpg',
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/81930fac-518d-4841-b968-ec0a5d0e6f3c.jpg',
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/3a5d3717-8aa1-485c-b0cd-c3ddc7415335.jpg',
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/0de6e932-8275-43d2-9ac9-c992aba89b65.jpg',
        ],
        comments: 0,
        date: '2022-09-08T13:14:53.63Z',
        text: 'Shirts added!! More to come 😉😳',
        likes: 11,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e5ca6b1b2acc7df75ded',
        userId: '6318e42f1e092fadca580648',
        username: 'bmkapparel',
        avatar:
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/d1d767f5-8956-4ad4-9ed8-30ee923bc6b2.jpg',
        shopName: 'BMK Apparel & More',
        shopId: '6318e5d4e475b6486f6e7524',
        images: [
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/2737e134-bd76-4da1-af06-7cb0ae21ce20.jpg',
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/ef1c5b88-77fa-46a7-998c-7a79a40cd06d.jpg',
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/bcaf82dd-15d5-4ff0-98f3-3f9396de9e0b.jpg',
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/4805fe3f-b362-44ce-b43e-dc63dbc12643.jpg',
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/3968d009-7e99-4b24-beee-789a03df823d.jpg',
          'https://images.tedooo.com/biz/6318e42f1e092fadca580648/5b1622f5-fae3-46d1-9256-8de9fdd71181.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:53:30.104Z',
        text: 'Got some tumblers with toppers added!!! 😁 So excited to be here',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e5ab6b1b2acc7df75de9',
        userId: '6319d88d6b1b2acc7df75d6f',
        username: 'alliescrochet',
        avatar:
          'https://images.tedooo.com/biz/6319d88d6b1b2acc7df75d6f/59f32320-dbbf-42e7-84a3-4500c41d3900.jpg',
        shopName: 'Allie\u2019s Crochet',
        shopId: '6319e4c76b1b2acc7df75de5',
        images: [
          'https://images.tedooo.com/biz/6319d88d6b1b2acc7df75d6f/30d92297-66c3-4b5c-8e6f-2576acfc23ee.jpg',
          'https://images.tedooo.com/biz/6319d88d6b1b2acc7df75d6f/dc1126ca-1c3f-4a69-be54-0f2ea5062d3c.jpg',
          'https://images.tedooo.com/biz/6319d88d6b1b2acc7df75d6f/c2e17bda-3e6f-4fd1-acb7-fa9ea027737f.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:52:59.227Z',
        text: 'Sharing my most recent project up on my page for sale:)',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e53bdd7574e7e49c1adc',
        userId: '63193f531e092fadca580842',
        username: 'onelittlespark67',
        avatar:
          'https://images.tedooo.com/biz/63193f531e092fadca580842/27ffb567-8b27-4c71-ac17-1715b9132858.jpg',
        shopName: 'One Little Spark',
        shopId: '6319e502dd7574e7e49c1ada',
        images: [
          'https://images.tedooo.com/biz/63193f531e092fadca580842/ebcc653d-db58-42cb-9901-851bab570abf.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:51:07.171Z',
        text: 'This little bag packs quite a punch. With the deeper pockets of the bow you are still able to fit quite a\n            bit in this bag, while still keeping it compact and you hands free. I am able to put a wallet, lip glosses\n            and even my mini umbrella when I am at the parks. Bag is available in a variety of print options.\n        ',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e4bbd519ba15e06d7284',
        userId: '6318a379a2967db5fdc89c22',
        username: 'ninetyfour',
        avatar:
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/613375d9-d54d-4858-b75d-f679d163af71.jpg',
        shopName: 'Ninety 94 Four',
        shopId: '6318c4caa2967db5fdc89da6',
        images: [
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/66ff10e5-0027-4ccf-8222-31238cfb3cfe.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:48:59.023Z',
        text: 'STYLE: Starry Night (black & gold glitter)\n\nHandmade Halloween earrings\nMade with UV Resin\n\u202212mm\n            in size\n\u2022choice between gold and silver earrings\n\u2022silicone back included\n\u2022Earring Backs are Made\n            of durable \n metallic material without lead, nickel and \n cadmium, anti-sensitive and safe to wear.\n        ',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e4a9d519ba15e06d7283',
        userId: '6318a379a2967db5fdc89c22',
        username: 'ninetyfour',
        avatar:
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/613375d9-d54d-4858-b75d-f679d163af71.jpg',
        shopName: 'Ninety 94 Four',
        shopId: '6318c4caa2967db5fdc89da6',
        images: [
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/1d5fe1e8-5357-4931-b1b9-cbea9e7347e2.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:48:41.496Z',
        text: 'STYLE: The Pink Glow\nHandmade Halloween earrings\nMade with UV Resin\n\u202212mm in size\n\u2022choice\n            between gold and silver earrings\n\u2022silicone back included\n\u2022Earring Backs are Made of durable \n\n            metallic material without lead, nickel and \n cadmium, anti-sensitive and safe to wear.\n        ',
        likes: 0,
        didLike: true,
        premium: false,
      },
      {
        id: '6319e49fd519ba15e06d7282',
        userId: '6318a379a2967db5fdc89c22',
        username: 'ninetyfour',
        avatar:
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/613375d9-d54d-4858-b75d-f679d163af71.jpg',
        shopName: 'Ninety 94 Four',
        shopId: '6318c4caa2967db5fdc89da6',
        images: [
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/f0e19a03-d780-4195-96d4-8f09c8462d73.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:48:31.05Z',
        text: 'So cute and funny!\nGreat for bachelorette party gifts!\nThank You Cum Again - clean up towel\nMeasures\n            approximately 7 x 13.5 inches folded, as shown in photo.\nBlack HTV in 100% cotton flour sack tea towel.\n\n        ',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e48dd519ba15e06d7280',
        userId: '6318a379a2967db5fdc89c22',
        username: 'ninetyfour',
        avatar:
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/613375d9-d54d-4858-b75d-f679d163af71.jpg',
        shopName: 'Ninety 94 Four',
        shopId: '6318c4caa2967db5fdc89da6',
        images: [
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/d5a2d2e6-1d95-429d-94b6-d699cf75755d.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:48:13.24Z',
        text: 'My WAP Towel - clean up towel - cum rag\nMeasures approximately 7x13.5\n\nGreat for bachelorette\n            party gifts, or for a couples gift! \nMeasures approximately 7x13.5 inches folded, as shown in photo.\n            \nBlack Htv on 100% cotton flour sack tea towel.\n        ',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e438d519ba15e06d727b',
        userId: '6318a379a2967db5fdc89c22',
        username: 'ninetyfour',
        avatar:
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/613375d9-d54d-4858-b75d-f679d163af71.jpg',
        shopName: 'Ninety 94 Four',
        shopId: '6318c4caa2967db5fdc89da6',
        images: [
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/66ff10e5-0027-4ccf-8222-31238cfb3cfe.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:46:48.342Z',
        text: 'STYLE: Starry Night (black & gold glitter)\n\nHandmade Halloween earrings\nMade with UV Resin\n\u202212mm\n            in size\n\u2022choice between gold and silver earrings\n\u2022silicone back included\n\u2022Earring Backs are Made\n            of durable \n metallic material without lead, nickel and \n cadmium, anti-sensitive and safe to wear.\n        ',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e418d519ba15e06d727a',
        userId: '6318a379a2967db5fdc89c22',
        username: 'ninetyfour',
        avatar:
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/613375d9-d54d-4858-b75d-f679d163af71.jpg',
        shopName: 'Ninety 94 Four',
        shopId: '6318c4caa2967db5fdc89da6',
        images: [
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/1d5fe1e8-5357-4931-b1b9-cbea9e7347e2.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:46:16.802Z',
        text: 'STYLE: The Pink Glow\nHandmade Halloween earrings\nMade with UV Resin\n\u202212mm in size\n\u2022choice\n            between gold and silver earrings\n\u2022silicone back included\n\u2022Earring Backs are Made of durable \n\n            metallic material without lead, nickel and \n cadmium, anti-sensitive and safe to wear.\n        ',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e3e3d519ba15e06d7279',
        userId: '6318a379a2967db5fdc89c22',
        username: 'ninetyfour',
        avatar:
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/613375d9-d54d-4858-b75d-f679d163af71.jpg',
        shopName: 'Ninety 94 Four',
        shopId: '6318c4caa2967db5fdc89da6',
        images: [
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/27308895-3b22-44db-9d07-081865fbce70.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:45:23.553Z',
        text: 'For all the horror movie fans!\nHave a Killer Halloween decorative kitchen towel, with scream, jason\n            voorhees, Michael myers, and chucky.\n\u2022handmade\n\u2022100% cotton flour sack towel\n\u2022measures\n            approximately 7 by 14 inches \n folded in half as shown in photos.\n\u2022perfect for Halloween coming up\n            and goes \n great in the oven door, or towl racks/\n ladders\n        ',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e3bad519ba15e06d7276',
        userId: '630b9d577f37bd61c1897385',
        username: 'fridomstudio',
        avatar:
          'https://images.tedooo.com/biz/630b9d577f37bd61c1897385/687c26d3-4be9-49ae-9f13-22d9af3c46cc.jpg',
        shopName: 'FridomStudio',
        shopId: '630ba4287f37bd61c18973ac',
        images: [
          'https://images.tedooo.com/biz/630b9d577f37bd61c1897385/4e9055a6-a844-433e-8d18-4793f82ec581.jpg',
          'https://images.tedooo.com/biz/630b9d577f37bd61c1897385/2d4cacc4-9ead-4452-a1df-15bace043e23.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:44:42.241Z',
        text: 'Shop my sale: 15% off all items in my shop! https://etsy.me/3DcW9tF',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e310d519ba15e06d7273',
        userId: '6318a379a2967db5fdc89c22',
        username: 'ninetyfour',
        avatar:
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/613375d9-d54d-4858-b75d-f679d163af71.jpg',
        shopName: 'Ninety 94 Four',
        shopId: '6318c4caa2967db5fdc89da6',
        images: [
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/1d5fe1e8-5357-4931-b1b9-cbea9e7347e2.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:41:52.403Z',
        text: 'STYLE: The Pink Glow\nHandmade Halloween earrings\nMade with UV Resin\n\u202212mm in size\n\u2022choice\n            between gold and silver earrings\n\u2022silicone back included\n\u2022Earring Backs are Made of durable \n\n            metallic material without lead, nickel and \n cadmium, anti-sensitive and safe to wear.\n        ',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e2cad519ba15e06d7272',
        userId: '6318a379a2967db5fdc89c22',
        username: 'ninetyfour',
        avatar:
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/613375d9-d54d-4858-b75d-f679d163af71.jpg',
        shopName: 'Ninety 94 Four',
        shopId: '6318c4caa2967db5fdc89da6',
        images: [
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/f97be856-b835-4f4c-816b-c1f6fbb35e2b.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:40:42.254Z',
        text: 'Perfect for Halloween coming up! \n\u2022Made with faux leather and htv\n\u2022on 10k gold plated earring\n            hooks (I can \n also do sterling silver, etc. just be sure to \n message me with what you\u2019d like)\n\u2022\n            measures approximately 2 inches wide by \n 2.5 inches in height.\n\u2022super light weight\n\u2022the back is\n            covered in black htv\n        ',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e2a9d519ba15e06d7271',
        userId: '6318a379a2967db5fdc89c22',
        username: 'ninetyfour',
        avatar:
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/613375d9-d54d-4858-b75d-f679d163af71.jpg',
        shopName: 'Ninety 94 Four',
        shopId: '6318c4caa2967db5fdc89da6',
        images: [
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/1d5fe1e8-5357-4931-b1b9-cbea9e7347e2.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:40:09.69Z',
        text: 'STYLE: The Pink Glow\nHandmade Halloween earrings\nMade with UV Resin\n\u202212mm in size\n\u2022choice\n            between gold and silver earrings\n\u2022silicone back included\n\u2022Earring Backs are Made of durable \n\n            metallic material without lead, nickel and \n cadmium, anti-sensitive and safe to wear.\n        ',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e296d519ba15e06d7270',
        userId: '6318a379a2967db5fdc89c22',
        username: 'ninetyfour',
        avatar:
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/613375d9-d54d-4858-b75d-f679d163af71.jpg',
        shopName: 'Ninety 94 Four',
        shopId: '6318c4caa2967db5fdc89da6',
        images: [
          'https://images.tedooo.com/biz/6318a379a2967db5fdc89c22/3f771012-d31b-491d-b9ce-c72f6d747d16.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:39:50.438Z',
        text: 'Black and hot pink htv \nVag rag - clean up towel -cum rag\n\nGreat for bachelorette party gifts,\n            or for a couples gift! \nMeasures approximately 7x13.5 inches folded, as shown in photo. \nHot pink\n            and Black Htv on 100% cotton flour sack tea towel.\n        ',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319e1f36b1b2acc7df75dc8',
        userId: '6307650a636b2f8478a5b70e',
        username: "breezy'sdecalsandmore",
        avatar:
          'https://images.tedooo.com/biz/6307650a636b2f8478a5b70e/4462f93d-8abd-4773-a0bc-ebe48d63d35e.jpg',
        shopName: 'Breezys Decals & More',
        shopId: '63076b99085189a797fb8416',
        images: [
          'https://images.tedooo.com/biz/6307650a636b2f8478a5b70e/bf42e401-0e5a-4bc2-9b53-5cd7106de89c.jpg',
          'https://images.tedooo.com/biz/6307650a636b2f8478a5b70e/3418d5fd-600a-426b-8832-20c17d6b2b05.jpg',
          'https://images.tedooo.com/biz/6307650a636b2f8478a5b70e/ded75361-1983-478e-ac81-ccc906d4dd1c.jpg',
          'https://images.tedooo.com/biz/6307650a636b2f8478a5b70e/87301ffa-34ec-4188-bef3-1be751e3fc84.jpg',
          'https://images.tedooo.com/biz/6307650a636b2f8478a5b70e/58f41619-16fe-431f-98ac-fa899d2d5887.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:37:07.387Z',
        text: 'Halloween is approaching to all the nightmare before Christmas fans I have these made to order and can be\n            decals put on shirts and on any type of cup.\n        ',
        likes: 0,
        didLike: false,
        premium: false,
      },
      {
        id: '6319de5e6b1b2acc7df75db9',
        userId: '6318ad0da2967db5fdc89cb2',
        username: 'witchyfindss',
        avatar:
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/63f7b63c-5bf5-4377-9ed7-a98ab95f19c4.jpg',
        shopName: 'WitchyFinds',
        shopId: '6318b425a2967db5fdc89ce2',
        images: [
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/e1f439cd-9863-42cb-abbb-59d930305f9c.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:21:50.359Z',
        text: 'Handmade resin floral ashtray or trinket tray',
        likes: 0,
        didLike: false,
        premium: true,
      },
      {
        id: '6319ddfd6b1b2acc7df75db8',
        userId: '6318ad0da2967db5fdc89cb2',
        username: 'witchyfindss',
        avatar:
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/63f7b63c-5bf5-4377-9ed7-a98ab95f19c4.jpg',
        shopName: 'WitchyFinds',
        shopId: '6318b425a2967db5fdc89ce2',
        images: [
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/bb33df3a-cf1b-41f7-af6d-7d2f13fe3623.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:20:13.085Z',
        text: 'Handmade resin moon and star trinket tray.',
        likes: 0,
        didLike: false,
        premium: true,
      },
      {
        id: '6319dd666b1b2acc7df75db5',
        userId: '6318ad0da2967db5fdc89cb2',
        username: 'witchyfindss',
        avatar:
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/63f7b63c-5bf5-4377-9ed7-a98ab95f19c4.jpg',
        shopName: 'WitchyFinds',
        shopId: '6318b425a2967db5fdc89ce2',
        images: [
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/99db81bd-cc8e-4688-a815-eecf05267b9c.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:17:42.948Z',
        text: 'Handmade 14\u201D candy corn wreath made from deco mesh and bat ribbon.',
        likes: 0,
        didLike: false,
        premium: true,
      },
      {
        id: '6319dd5d6b1b2acc7df75db4',
        userId: '6318ad0da2967db5fdc89cb2',
        username: 'witchyfindss',
        avatar:
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/63f7b63c-5bf5-4377-9ed7-a98ab95f19c4.jpg',
        shopName: 'WitchyFinds',
        shopId: '6318b425a2967db5fdc89ce2',
        images: [
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/a4adff4d-570d-42d5-92e9-f5296cd73843.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:17:33.084Z',
        text: 'This 8oz snickerdoodle body scrub is a great exfoliate especially for anyone with sensitive skin, eczema\n            etc. it exfoliates dead skin, can be used to reduce appearance of cellulite, fine lines and wrinkles! Smells\n            just like a snickerdoodle cookie! Made with all natural ingredients including: organic cane sugar, coconut\n            oil, vanilla extract and cinnamon essential oil. Leaves skin feeling soft and smooth. Perfect for the fall\n            season.\n        ',
        likes: 0,
        didLike: false,
        premium: true,
      },
      {
        id: '6319dd516b1b2acc7df75db3',
        userId: '6318ad0da2967db5fdc89cb2',
        username: 'witchyfindss',
        avatar:
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/63f7b63c-5bf5-4377-9ed7-a98ab95f19c4.jpg',
        shopName: 'WitchyFinds',
        shopId: '6318b425a2967db5fdc89ce2',
        images: [
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/c052cf3a-08b4-42bb-8125-d50db235701e.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:17:21.274Z',
        text: 'Handmade ouija planchette is made from resin and paint. Cute decor.',
        likes: 0,
        didLike: false,
        premium: true,
      },
      {
        id: '6319dd426b1b2acc7df75db2',
        userId: '6318ad0da2967db5fdc89cb2',
        username: 'witchyfindss',
        avatar:
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/63f7b63c-5bf5-4377-9ed7-a98ab95f19c4.jpg',
        shopName: 'WitchyFinds',
        shopId: '6318b425a2967db5fdc89ce2',
        images: [
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/216dc46b-6bd5-4de8-87ef-9a1294e32d10.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:17:06.983Z',
        text: 'Handmade resin trinket tray made with resin and paint.',
        likes: 0,
        didLike: false,
        premium: true,
      },
      {
        id: '6319dd376b1b2acc7df75db1',
        userId: '6318ad0da2967db5fdc89cb2',
        username: 'witchyfindss',
        avatar:
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/63f7b63c-5bf5-4377-9ed7-a98ab95f19c4.jpg',
        shopName: 'WitchyFinds',
        shopId: '6318b425a2967db5fdc89ce2',
        images: [
          'https://images.tedooo.com/biz/6318ad0da2967db5fdc89cb2/48da4c75-54e1-457e-a643-a4b4bc5b7482.jpg',
        ],
        comments: 0,
        date: '2022-09-08T12:16:55.891Z',
        text: 'This 14\u201D handmade wreath is made with deco mesh, ribbon, and little decor. Lights up with the led lights\n            inside wreath for a spooky Halloween look.\n        ',
        likes: 0,
        didLike: false,
        premium: true,
      },
    ]
    utilService.saveToStorage(STORAGE_KEY, posts)
  }
  return posts
}
