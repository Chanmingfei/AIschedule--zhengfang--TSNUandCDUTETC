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
            { section: 2, startTime: "09:00", endTime: "10:00" },
            { section: 3, startTime: "10:10", endTime: "11:00" },
            { section: 4, startTime: "11:10", endTime: "12:00" },
            { section: 5, startTime: "14:30", endTime: "15:20" },
            { section: 6, startTime: "15:30", endTime: "16:20" },
            { section: 7, startTime: "16:40", endTime: "17:30" },
            { section: 8, startTime: "17:40", endTime: "18:30" },
            { section: 9, startTime: "19:20", endTime: "20:10" },
            { section: 10, startTime: "20:20", endTime: "21:10" }
        ], // 课程时间表
    }
 
}
