module.exports = {
    remainingDays(job) {
        //cálculo do tempo restante
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()

        const createDated = new Date(job.created_at)
        const dueDay = createDated.getDate() + Number(remainingDays)
        const dueDateInMs = createDated.setDate(dueDay)

        const timeDiffInMs = dueDateInMs - Date.now()
        //transformar milisegundos em dias
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs)

        //restam x dias
        return dayDiff
    },

    calculateBudget: (job, valueHour) => valueHour * job["total-hours"] 
}