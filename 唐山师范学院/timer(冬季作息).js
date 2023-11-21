/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
 async function scheduleTimer({
    providerRes,
    parserRes
} = {}) {
    return {
        totalWeek: 20, // 总周数
        startSemester: '1693152000000', // 开学时间
        startWithSunday: false, // 是否是周日为起始日
        showWeekend: true, // 是否显示周末
        forenoon: 4, // 上午课程节数
        afternoon: 4, // 下午课程节数
        night: 2, // 晚间课程节数
        sections: [
            { section: 1, startTime: "08:00", endTime: "08:50" },
            { section: 2, startTime: "09:00", endTime: "09:50" },
            { section: 3, startTime: "10:10", endTime: "11:00" },
            { section: 4, startTime: "11:10", endTime: "12:00" },
            { section: 5, startTime: "14:00", endTime: "14:50" },
            { section: 6, startTime: "15:00", endTime: "15:50" },
            { section: 7, startTime: "16:10", endTime: "17:00" },
            { section: 8, startTime: "17:10", endTime: "18:00" },
            { section: 9, startTime: "19:00", endTime: "19:50" },
            { section: 10, startTime: "20:00", endTime: "20:50" }
        ], // 课程时间表
    }
 
}
