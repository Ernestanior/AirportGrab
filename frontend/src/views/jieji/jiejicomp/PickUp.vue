<template>
  <div>
    <div>
      <div class="form_content">
        <div>
          <span>Airport: </span>
          <el-select v-model="puform.add_from" placeholder="Choose airport" style="width: 40vw;">
            <el-option v-for="item in airports" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div>
          <span>Destination: </span>
          <input v-model="puform.add_to" type="text" class="input_text">
        </div>
        <div>
          <span>Date: </span>
          <el-date-picker v-model="date" type="date" :picker-options="pickerOptions" @change="DateChange"
            placeholder="Choose date" style="margin-left: 13px; width: 40vw;">
          </el-date-picker>
        </div>
        <div>
          <span>Phone Num: </span>
          <input v-model="puform.contact" type="text" class="input_text">
        </div>
        <div>
          <span>Time: </span>
          <el-time-picker v-model="time" type="time" format="hh:mm" placeholder="Choose time" @change="TimeChange"
            style="margin-left: 13px; width: 40vw;">
          </el-time-picker>
        </div>
        <div>
          <span>People: </span>
          <el-select v-model="puform.people_number" placeholder="choose num of people" style="width: 40vw;">
            <el-option v-for="item in people" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div>
          <span>Luggages: </span>
          <el-select v-model="puform.luggage" placeholder="choose num of luggages" style="width: 40vw;">
            <el-option v-for="item in luggages" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div>
          <span>Others(option): </span>
          <input v-model="puform.add" type="text" class="input_text">
        </div>
      </div>
    </div>
    <button class="submit" type="submit" @click="hanleSubmit">Submit</button>

  </div>
</template>

<script>

  import { formatDate } from '@/common/utils.js'
  export default {
    name: 'PickUp',
    components: {

    },
    data() {
      return {
        showToast: false,
        message: "Ern!!!!",
        date: '',
        time: '',
        puform: {
          uname: 'Ernest',
          type: 'pickup',
          status: 'doing',
          add_from: '',
          add_to: '',
          price: 40,
          time: '',
          date: '',
          people_number: 0,
          luggage: 0,
          contact: '',
          add: ''
        },
        airports: [{
          value: 'BNE Domestic Airport',
          label: 'BNE Domestic Airport'
        }, {
          value: 'BNE International Airport',
          label: 'BNE International Airport'
        }],
        people: [{
          value: 1,
          label: 1
        }, {
          value: 2,
          label: 2
        }, {
          value: 3,
          label: 3
        }, {
          value: 4,
          label: 4
        }, {
          value: 5,
          label: 5
        }, {
          value: 6,
          label: 6
        }, {
          value: 7,
          label: 7
        }, {
          value: 8,
          label: 8
        }],
        luggages: [{
          value: 1,
          label: 1
        }, {
          value: 2,
          label: 2
        }, {
          value: 3,
          label: 3
        }, {
          value: 4,
          label: 4
        }, {
          value: 5,
          label: 5
        }, {
          value: 6,
          label: 6
        }, {
          value: 7,
          label: 7
        }, {
          value: 8,
          label: 8
        }, {
          value: 1,
          label: 1
        }, {
          value: 2,
          label: 2
        }, {
          value: 3,
          label: 3
        }, {
          value: 4,
          label: 4
        }, {
          value: 5,
          label: 5
        }, {
          value: 6,
          label: 6
        }, {
          value: 7,
          label: 7
        }, {
          value: 8,
          label: 8
        }, {
          value: 9,
          label: 9
        }, {
          value: 10,
          label: 10
        }, {
          value: 11,
          label: 11
        }, {
          value: 12,
          label: 12
        }, {
          value: 13,
          label: 13
        }, {
          value: 14,
          label: 14
        }, {
          value: 15,
          label: 15
        }, {
          value: 16,
          label: 16
        }],
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 3600 * 1000 * 24;
          }
        },
      }
    },
    methods: {
      DateChange(date) {
        this.puform.date = formatDate(date, 'yyyy-MM-dd')
      },
      TimeChange(time) {
        this.puform.time = formatDate(time, 'hh:mm')
      },
      hanleSubmit() {
        const res = this.puform
        // console.log(res);
        if (res.add_from == "") {
          this.$error.show("Please Select Airport")
        }
        else if (res.add_to == "") {
          this.$error.show("Please Enter Destination")
        }
        else if (res.contact == "") {
          this.$error.show("Please Enter Phone")
        }
        else if (res.time == "") {
          this.$error.show("Please Select Time")
        }
        else if (res.people_number == "") {
          this.$error.show("Please Select Num Of People")
        }
        else if (res.luggage == "") {
          this.$error.show("Please Select Num Of Luggages")
        }
        else {
          // console.log("success");
          this.$router.push({
            path: '/confirm',
            query: res
          })
        }
      }
    },
  }
</script>
<style scoped>
  .form_content {
    padding: 0 25px;
  }

  .form_content>div {
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input_text {
    border: 0;
    border-bottom: 1px solid #000;
    width: 40vw;
  }

  .submit {
    margin-top: 10px;
    height: 5vh;
    width: 40vw;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1653c4;
    border-radius: 5px;
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 5px #679afa;
  }
</style>