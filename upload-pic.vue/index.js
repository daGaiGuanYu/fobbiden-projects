import axios from 'axios'

export default {
  name: 'upload-img',
  props: ['value'],
  methods: {
    upload(e){
      let file = e.target.files[0]
      let filename = file.name.split('.')
      let suffix = filename[filename.length-1]
      return axios.post(`/upload?suffix=${suffix}`, file, {
        'Content-Type': 'application/octet-stream'
      }).then( res => {
        this.$emit('input', res.data)
      })
    }
  }
}