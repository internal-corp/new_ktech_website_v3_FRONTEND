<template>
    <div class="service">
        <div class="first">
            <div class="image">
                <img src="../assets/images/server-1.png" alt="server">
            </div>
            <div class="emc">
                <h1>EMC CERTIFICATION</h1>
                <P>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quaerat!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sequ
                </P>
                <P class="P">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quaerat!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sequ
                </P>
            </div>
        </div>
        <div class="second">
            <div class="rf">
                <div v-if="mobile" class="image">
                    <img src="../assets/images/rf.png" alt="rf">
                </div>
                <div class="text">
                    <h1>RF Type Approval</h1>
                    <P>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quaerat!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sequi
                    </P>
                    <P>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quaerat!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sequi
                    </P>
                </div>
                <div v-if="!mobile" class="image">
                    <img src="../assets/images/rf.png" alt="rf">
                </div>
            </div>
            <div class="safety">
                <div v-if="mobile" class="image">
                    <img src="../assets/images/energy.png" alt="energy">
                </div>
                <div class="text">
                    <h1>Safety & Energy Efficien</h1>
                    <P>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quaerat!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sequi!
                    </P>
                    <P>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quaerat!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, sequi!
                    </P>
                </div>
                <div v-if="!mobile" class="image">
                    <img src="../assets/images/energy.png" alt="energy">
                </div>
            </div>
        </div>
        <div class="third">
            <div class="advantage">
                <h1>Our Advantage</h1>
                <ul>
                    <li>Short processing time</li>
                    <li>Weekly project update</li>
                    <li>Reasonable price</li>
                </ul>
            </div>
            <div class="query">
                <h1>Inqueries about your certificat ?</h1>
                <div class="input">
                    <input type="text" placeholder="Enter your email adress">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'service',
    props:{
        mobile:Boolean,
    }
}
</script>

<style src="../css/service.css" scoped>

</style>