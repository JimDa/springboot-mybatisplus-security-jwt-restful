package com.github.base.db.mapper.primary.manage;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.github.common.config.mybatis.cache.MybatisRedisCacheConfig;
import com.github.common.db.entity.primary.SysUserUnit;
import org.apache.ibatis.annotations.CacheNamespace;
import org.springframework.stereotype.Component;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author WORK,MT
 * @since 2019-04-16
 */
@Component
@CacheNamespace(implementation = MybatisRedisCacheConfig.class)
public interface SysUserUnitMapper extends BaseMapper<SysUserUnit> {

}