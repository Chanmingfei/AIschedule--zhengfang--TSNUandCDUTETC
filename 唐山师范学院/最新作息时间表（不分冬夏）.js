/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
 async function scheduleTimer({
    providerRes,
    parserRes
} = {}) {
    return {
        totalWeek: 20, // 总周数
        startSemester: '1725206400000', // 开学时间
        startWithSunday: false, // 是否是周日为起始日
        showWeekend: true, // 是否显示周末
        forenoon: 4, // 上午课程节数
        afternoon: 5, // 下午课程节数
        night: 3, // 晚间课程节数
        sections: [
            { section: 1, startTime: "08:00", endTime: "08:45" },
            { section: 2, startTime: "08:50", endTime: "09:35" },
            { section: 3, startTime: "09:55", endTime: "10:40" },
            { section: 4, startTime: "10:45", endTime: "11:30" },
            { section: 5, startTime: "14:00", endTime: "14:45" },
            { section: 6, startTime: "14:50", endTime: "15:35" },
            { section: 7, startTime: "15:55", endTime: "16:40" },
            { section: 8, startTime: "16:45", endTime: "17:30" },
            { section: 9, startTime: "17:35", endTime: "18:20" }, 
            { section: 10, startTime: "19:00", endTime: "19:45" },
            { section: 11, startTime: "19:50", endTime: "20:35" },
            { section: 12, startTime: "20:40", endTime: "21:25" }
        ], // 课程时间表
    }
 
}
